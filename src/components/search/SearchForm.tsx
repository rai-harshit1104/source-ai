import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Textarea } from "@/components/ui/textarea";
import { Search as SearchIcon } from "lucide-react";
import React from "react";

interface SearchFormProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSearch: () => void;
  loading: boolean;
  disabled: boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({ value, onChange, onSearch, loading, disabled }) => (
  <Card className="border-0 shadow-large">
    <CardContent className="p-8">
      <div className="space-y-6">
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">
            Describe your ideal candidate
          </label>
          <Textarea
            placeholder="I'm looking for a senior React developer with 5+ years of experience, expertise in TypeScript, and experience with cloud platforms like AWS. They should have strong problem-solving skills and experience working in agile teams..."
            value={value}
            onChange={onChange}
            className="min-h-[120px] resize-none"
          />
        </div>
        <Button 
          variant="hero" 
          size="xl" 
          onClick={onSearch}
          disabled={disabled}
          className="w-full"
        >
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Searching...
            </>
          ) : (
            <>
              <SearchIcon className="w-5 h-5 mr-2" />
              Search Candidates
            </>
          )}
        </Button>
      </div>
    </CardContent>
  </Card>
);

export default SearchForm; 