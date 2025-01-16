import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface IntroCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const IntroCard: React.FC<IntroCardProps> = ({ title, description, imageSrc, imageAlt }) => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <p className="text-gray-600">{description}</p>
          </div>
          <div className="flex-1">
            <img 
              src={imageSrc}
              alt={imageAlt}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};