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

  // Function to render description with bullet points if it contains specific phases
  const renderDescription = () => {
    if (description.includes("Identify -")) {
      const [intro, ...rest] = description.split("Identify -");
      const phases = ["Identify", "Recall", "Apply"].map(phase => {
        const phaseRegex = new RegExp(`${phase} - ([^.]+)`);
        const match = description.match(phaseRegex);
        return match ? `${phase} - ${match[1]}` : null;
      }).filter(Boolean);
      
      return (
        <div className="space-y-4">
          <p className="text-gray-600 text-lg leading-relaxed">{intro.trim()}</p>
          <ul className="list-disc pl-6 space-y-2">
            {phases.map((phase, index) => (
              <li key={index} className="text-gray-600 text-lg leading-relaxed">
                {phase}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    
    return <p className="text-gray-600 text-lg leading-relaxed">{description}</p>;
  };

  return (
    <Card className="mb-8">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row items-center">
          <div className={`flex-1 ${imageOrder}`}>
            <img 
              src="/lovable-uploads/57d2aa16-250c-4ffd-81de-b24b42808746.png"
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className={`flex-1 p-8 space-y-4 ${contentOrder}`}>
            <CardTitle className="text-3xl text-primary-dark">{title}</CardTitle>
            {renderDescription()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};