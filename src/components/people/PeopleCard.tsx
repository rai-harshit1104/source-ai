import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Mail, Phone, MoreHorizontal, Calendar, Clock, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import React from "react";

export interface Person {
  id: number;
  name: string;
  title: string;
  company: string;
  location: string;
  avatar: string;
  status: string;
  contactDate: string;
  lastActivity: string;
  email: string;
  phone: string;
  notes: string;
  stage: string;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "responded":
      return "bg-success/10 text-success border-success/20";
    case "interested":
      return "bg-primary/10 text-primary border-primary/20";
    case "pending":
      return "bg-warning/10 text-warning border-warning/20";
    case "not_interested":
      return "bg-muted text-muted-foreground border-muted";
    default:
      return "bg-muted text-muted-foreground border-muted";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "responded":
      return <CheckCircle className="w-4 h-4" />;
    case "interested":
      return <CheckCircle className="w-4 h-4" />;
    case "pending":
      return <Clock className="w-4 h-4" />;
    case "not_interested":
      return <AlertCircle className="w-4 h-4" />;
    default:
      return <Clock className="w-4 h-4" />;
  }
};

const PeopleCard: React.FC<{ person: Person }> = ({ person }) => (
  <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
    <CardContent className="p-6">
      <div className="grid lg:grid-cols-6 gap-6">
        {/* Profile Info */}
        <div className="lg:col-span-2">
          <div className="flex items-start gap-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src={person.avatar} />
              <AvatarFallback className="bg-gradient-primary text-white">
                {person.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-foreground">{person.name}</h3>
              <p className="text-muted-foreground">{person.title} at {person.company}</p>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                <MapPin className="w-3 h-3" />
                {person.location}
              </div>
            </div>
          </div>
        </div>
        {/* Status & Stage */}
        <div className="space-y-2">
          <div>
            <div className="text-sm font-medium text-foreground mb-1">Status</div>
            <Badge variant="outline" className={getStatusColor(person.status)}>
              {getStatusIcon(person.status)}
              <span className="ml-1 capitalize">{person.status.replace('_', ' ')}</span>
            </Badge>
          </div>
          <div>
            <div className="text-sm font-medium text-foreground mb-1">Stage</div>
            <Badge variant="secondary">{person.stage}</Badge>
          </div>
        </div>
        {/* Timeline */}
        <div className="space-y-2">
          <div>
            <div className="text-sm font-medium text-foreground mb-1">Contact Date</div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="w-3 h-3" />
              {new Date(person.contactDate).toLocaleDateString()}
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-foreground mb-1">Last Activity</div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="w-3 h-3" />
              {person.lastActivity}
            </div>
          </div>
        </div>
        {/* Notes */}
        <div>
          <div className="text-sm font-medium text-foreground mb-1">Notes</div>
          <p className="text-sm text-muted-foreground">{person.notes}</p>
        </div>
        {/* Actions */}
        <div className="flex flex-col gap-2">
          <Button variant="default" size="sm" className="w-full">
            <Mail className="w-4 h-4 mr-2" />
            Email
          </Button>
          <Button variant="outline" size="sm" className="w-full">
            <Phone className="w-4 h-4 mr-2" />
            Call
          </Button>
          <Button variant="ghost" size="sm" className="w-full">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default PeopleCard; 