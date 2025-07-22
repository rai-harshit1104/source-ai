"use client"
import { useState } from "react";
import SearchForm from "@/components/search/SearchForm";
import SearchResults from "@/components/search/SearchResults";
import { Candidate } from "@/components/search/SearchCandidateCard";
import { Search as SearchIcon } from "lucide-react";

const mockResults: Candidate[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior React Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    avatar: "/placeholder-avatar-1.jpg",
    skills: ["React", "TypeScript", "Node.js", "GraphQL", "AWS"],
    experience: "5+ years",
    matchScore: 95,
    email: "sarah.j@email.com",
    phone: "+1 (555) 123-4567",
    summary: "Experienced full-stack developer with expertise in modern React ecosystem and cloud infrastructure."
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Full Stack Engineer",
    company: "StartupXYZ",
    location: "New York, NY",
    avatar: "/placeholder-avatar-2.jpg",
    skills: ["JavaScript", "React", "Python", "Docker", "PostgreSQL"],
    experience: "4+ years",
    matchScore: 89,
    email: "m.chen@email.com",
    phone: "+1 (555) 987-6543",
    summary: "Versatile engineer with strong problem-solving skills and experience in both frontend and backend development."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Frontend Developer",
    company: "DesignHub",
    location: "Austin, TX",
    avatar: "/placeholder-avatar-3.jpg",
    skills: ["React", "Vue.js", "CSS", "Figma", "JavaScript"],
    experience: "3+ years",
    matchScore: 82,
    email: "emily.r@email.com",
    phone: "+1 (555) 456-7890",
    summary: "Creative frontend developer with strong design sensibilities and expertise in modern frameworks."
  }
];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    setIsSearching(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSearching(false);
    setHasSearched(true);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Find Your Perfect Candidate
            </h1>
            <p className="text-xl text-muted-foreground">
              Describe what you're looking for and let our AI find the best matches
            </p>
          </div>
          <SearchForm
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onSearch={handleSearch}
            loading={isSearching}
            disabled={!searchQuery.trim() || isSearching}
          />
        </div>

        {/* Results Section */}
        {hasSearched && <SearchResults candidates={mockResults} />}

        {/* Empty State */}
        {!hasSearched && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
              <SearchIcon className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Ready to find talent?</h3>
            <p className="text-muted-foreground">
              Enter your requirements above and discover perfectly matched candidates instantly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;