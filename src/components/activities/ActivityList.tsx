import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

interface Activity {
  name: string;
  grades: string;
}

interface ActivityListProps {
  activities: Activity[];
}

export const ActivityList: React.FC<ActivityListProps> = ({ activities }) => {
  return (
    <ul className="space-y-4">
      {activities.map((activity, index) => (
        <li key={index} className="border-b pb-2">
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
              <span>{activity.name}</span>
              <span className="flex items-center gap-2">
                <span className="text-sm text-gray-500">
                  Grades {activity.grades}
                </span>
                <ChevronDown className="h-4 w-4" />
              </span>
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-2">
              <div className="bg-neutral p-4 rounded-lg text-center text-gray-500">
                [Activity preview placeholder]
              </div>
            </CollapsibleContent>
          </Collapsible>
        </li>
      ))}
    </ul>
  );
};