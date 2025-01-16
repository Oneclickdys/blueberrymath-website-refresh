import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ActivityList } from './ActivityList';

interface Category {
  title: string;
  activities: Array<{
    name: string;
    grades: string;
  }>;
}

interface CategoryTabsProps {
  categories: Record<string, Category>;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories }) => {
  // Get the first category key for default value
  const defaultCategory = Object.keys(categories)[0] || "numbersAndOperations";

  return (
    <Tabs defaultValue={defaultCategory} className="w-full">
      <TabsList className="w-full flex flex-wrap gap-2">
        {Object.keys(categories).map((category) => (
          <TabsTrigger 
            key={category} 
            value={category}
            className="flex-grow"
          >
            {categories[category].title}
          </TabsTrigger>
        ))}
      </TabsList>

      {Object.entries(categories).map(([key, category]) => (
        <TabsContent key={key} value={key} className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
              <CardDescription>
                Select a content to see an example of the activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ActivityList activities={category.activities} />
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
};