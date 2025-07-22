import { Button } from "@/components/ui/Button";
import { Filter, Download } from "lucide-react";
import SearchCandidateCard, { Candidate } from "@/components/search/SearchCandidateCard";
import React from "react";

interface SearchResultsProps {
  candidates: Candidate[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ candidates }) => (
  <div className="animate-fade-in">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-foreground">
        Search Results ({candidates.length} candidates found)
      </h2>
      <div className="flex gap-2">
        <Button variant="outline" size="sm">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
        <Button variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </div>
    </div>
    <div className="grid gap-6">
      {candidates.map((candidate) => (
        <SearchCandidateCard key={candidate.id} candidate={candidate} />
      ))}
    </div>
  </div>
);

export default SearchResults; 