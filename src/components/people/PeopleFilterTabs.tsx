import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Button } from "@/components/ui/Button";
import { Filter, Search } from "lucide-react";
import React from "react";

interface StatusCounts {
  all: number;
  responded: number;
  pending: number;
  interested: number;
  not_interested: number;
}

interface PeopleFilterTabsProps {
  filter: string;
  onFilterChange: (value: string) => void;
  statusCounts: StatusCounts;
}

const PeopleFilterTabs: React.FC<PeopleFilterTabsProps> = ({ filter, onFilterChange, statusCounts }) => (
  <Tabs value={filter} onValueChange={onFilterChange} className="mb-8">
    <div className="flex justify-between items-center mb-4">
      <TabsList className="grid w-fit grid-cols-5">
        <TabsTrigger value="all">All ({statusCounts.all})</TabsTrigger>
        <TabsTrigger value="responded">Responded ({statusCounts.responded})</TabsTrigger>
        <TabsTrigger value="pending">Pending ({statusCounts.pending})</TabsTrigger>
        <TabsTrigger value="interested">Interested ({statusCounts.interested})</TabsTrigger>
        <TabsTrigger value="not_interested">Declined ({statusCounts.not_interested})</TabsTrigger>
      </TabsList>
      <div className="flex gap-2">
        <Button variant="outline" size="sm">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
        <Button variant="outline" size="sm">
          <Search className="w-4 h-4 mr-2" />
          Search
        </Button>
      </div>
    </div>
  </Tabs>
);

export default PeopleFilterTabs; 