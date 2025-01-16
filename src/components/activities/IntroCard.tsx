import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface IntroCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
}

export const IntroCard: React.FC<IntroCardProps> = ({ 
  title, 
  description, 
  imageSrc, 
  imageAlt,
  imagePosition 
}) => {
  const contentOrder = imagePosition === 'left' ? 'md:order-2' : 'md:order-1';
  const imageOrder = imagePosition === 'left' ? 'md:order-1' : 'md:order-2';

  return (
    <Card className="mb-24">
      <CardHeader>
        <CardTitle className="text-3xl text-primary-dark">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className={`flex-1 space-y-4 ${contentOrder}`}>
            <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
          </div>
          <div className={`flex-1 ${imageOrder}`}>
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