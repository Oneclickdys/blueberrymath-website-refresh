import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import customExercises from '../../data/customExercises';
import Question from '../Question';

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
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-2">
              <div className="bg-neutral p-4 rounded-lg text-gray-500">
                <Question 
                  data={customExercises['numbers-and-operations']['vertical-addition-and-subtraction'][index > 3 ? 3 : index]} 
                  fileApi="https://api.example.com/files"
                />
              </div>
            </CollapsibleContent>
          </Collapsible>
        </li>
      ))}
    </ul>
  );
};