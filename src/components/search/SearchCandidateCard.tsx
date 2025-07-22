import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Mail, MessageCircle, Phone, MapPin, Briefcase } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import React from "react";

export interface Candidate {
  id: number;
  name: string;
  title: string;
  company: string;
  location: string;
  avatar: string;
  skills: string[];
  experience: string;
  matchScore: number;
  email: string;
  phone: string;
  summary: string;
}

const SearchCandidateCard: React.FC<{ candidate: Candidate }> = ({ candidate }) => (
  <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
    <CardContent className="p-6">
      <div className="grid lg:grid-cols-4 gap-6">
        {/* Profile Info */}
        <div className="lg:col-span-2">
          <div className="flex items-start gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src={candidate.avatar} />
              <AvatarFallback className="bg-gradient-primary text-white text-lg">
                {candidate.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-semibold text-foreground">{candidate.name}</h3>
                <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                  {candidate.matchScore}% match
                </Badge>
              </div>
              <p className="text-muted-foreground mb-2">{candidate.title} at {candidate.company}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {candidate.location}
                </div>
                <div className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" />
                  {candidate.experience}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{candidate.summary}</p>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div>
          <h4 className="font-medium text-foreground mb-3">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {candidate.skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        {/* Actions */}
        <div className="flex flex-col gap-2">
          <Button variant="default" size="sm" className="w-full">
            <Mail className="w-4 h-4 mr-2" />
            Contact
          </Button>
          <Button variant="outline" size="sm" className="w-full">
            <MessageCircle className="w-4 h-4 mr-2" />
            Message
          </Button>
          <div className="text-xs text-muted-foreground mt-2 space-y-1">
            <div className="flex items-center gap-1">
              <Mail className="w-3 h-3" />
              <span className="truncate">{candidate.email}</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              <span>{candidate.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default SearchCandidateCard; 