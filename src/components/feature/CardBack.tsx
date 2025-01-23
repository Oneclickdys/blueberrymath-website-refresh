import React from 'react';
import { Card } from "@/components/ui/card";

interface CardBackProps {
  title: string;
  backText: string;
  backImage: string;
  onClick: () => void;
}

export const CardBack: React.FC<CardBackProps> = ({ title, backText, backImage, onClick }) => {
  return (
    <Card className="w-full h-[300px] p-6 bg-primary text-white flex flex-col items-center justify-center cursor-pointer" onClick={onClick}>
      <div className="w-full h-32 mb-4 overflow-hidden rounded-lg">
        <img 
          src={`https://images.unsplash.com/photo-${backImage}`}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-sm text-center">
        {backText}
      </p>
    </Card>
  );
};