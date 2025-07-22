import { Card, CardContent } from "@/components/ui/Card";
import React from "react";

interface StatusCounts {
  all: number;
  responded: number;
  pending: number;
  interested: number;
  not_interested: number;
}

const PeopleStats: React.FC<{ statusCounts: StatusCounts }> = ({ statusCounts }) => (
  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
    <Card className="border-0 shadow-soft">
      <CardContent className="p-4 text-center">
        <div className="text-2xl font-bold text-foreground">{statusCounts.all}</div>
        <div className="text-sm text-muted-foreground">Total Contacts</div>
      </CardContent>
    </Card>
    <Card className="border-0 shadow-soft">
      <CardContent className="p-4 text-center">
        <div className="text-2xl font-bold text-success">{statusCounts.responded}</div>
        <div className="text-sm text-muted-foreground">Responded</div>
      </CardContent>
    </Card>
    <Card className="border-0 shadow-soft">
      <CardContent className="p-4 text-center">
        <div className="text-2xl font-bold text-warning">{statusCounts.pending}</div>
        <div className="text-sm text-muted-foreground">Pending</div>
      </CardContent>
    </Card>
    <Card className="border-0 shadow-soft">
      <CardContent className="p-4 text-center">
        <div className="text-2xl font-bold text-primary">{statusCounts.interested}</div>
        <div className="text-sm text-muted-foreground">Interested</div>
      </CardContent>
    </Card>
    <Card className="border-0 shadow-soft">
      <CardContent className="p-4 text-center">
        <div className="text-2xl font-bold text-muted-foreground">{statusCounts.not_interested}</div>
        <div className="text-sm text-muted-foreground">Declined</div>
      </CardContent>
    </Card>
  </div>
);

export default PeopleStats; 