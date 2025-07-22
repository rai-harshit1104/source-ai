"use client"
import { useState } from "react";
import PeopleCard, { Person } from "@/components/people/PeopleCard";
import PeopleStats from "@/components/people/PeopleStats";
import PeopleFilterTabs from "@/components/people/PeopleFilterTabs";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/Button";

const contactedPeople: Person[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior React Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    avatar: "/placeholder-avatar-1.jpg",
    status: "responded",
    contactDate: "2024-01-15",
    lastActivity: "2 hours ago",
    email: "sarah.j@email.com",
    phone: "+1 (555) 123-4567",
    notes: "Very interested in the position. Available for interview next week.",
    stage: "Interview Scheduled"
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Full Stack Engineer",
    company: "StartupXYZ",
    location: "New York, NY",
    avatar: "/placeholder-avatar-2.jpg",
    status: "pending",
    contactDate: "2024-01-14",
    lastActivity: "1 day ago",
    email: "m.chen@email.com",
    phone: "+1 (555) 987-6543",
    notes: "Initial email sent. Waiting for response.",
    stage: "Initial Contact"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Frontend Developer",
    company: "DesignHub",
    location: "Austin, TX",
    avatar: "/placeholder-avatar-3.jpg",
    status: "interested",
    contactDate: "2024-01-13",
    lastActivity: "3 days ago",
    email: "emily.r@email.com",
    phone: "+1 (555) 456-7890",
    notes: "Expressed interest. Reviewing job description.",
    stage: "Considering Offer"
  },
  {
    id: 4,
    name: "David Kim",
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Seattle, WA",
    avatar: "/placeholder-avatar-4.jpg",
    status: "not_interested",
    contactDate: "2024-01-12",
    lastActivity: "4 days ago",
    email: "d.kim@email.com",
    phone: "+1 (555) 789-0123",
    notes: "Declined opportunity. Happy with current role.",
    stage: "Declined"
  }
];

const getStatusCounts = (people: Person[]) => ({
  all: people.length,
  responded: people.filter(p => p.status === "responded").length,
  pending: people.filter(p => p.status === "pending").length,
  interested: people.filter(p => p.status === "interested").length,
  not_interested: people.filter(p => p.status === "not_interested").length,
});

const People = () => {
  const [filter, setFilter] = useState("all");
  const statusCounts = getStatusCounts(contactedPeople);
  const filteredPeople = filter === "all"
    ? contactedPeople
    : contactedPeople.filter(person => person.status === filter);

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            People You've Contacted
          </h1>
          <p className="text-xl text-muted-foreground">
            Track and manage your candidate communications and hiring pipeline
          </p>
        </div>

        {/* Stats Cards */}
        <PeopleStats statusCounts={statusCounts} />

        {/* Filters */}
        <PeopleFilterTabs filter={filter} onFilterChange={setFilter} statusCounts={statusCounts} />

        {/* People List */}
        <div className="space-y-4">
          {filteredPeople.map((person) => (
            <PeopleCard key={person.id} person={person} />
          ))}
        </div>

        {/* Empty State */}
        {filteredPeople.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
              <Users className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No candidates found</h3>
            <p className="text-muted-foreground mb-6">
              No candidates match the current filter criteria.
            </p>
            <Button variant="hero" onClick={() => setFilter("all")}>View All Contacts</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default People;