import React from 'react';
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CardFrontProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const CardFront: React.FC<CardFrontProps> = ({ title, description, icon: Icon }) => {
  return (
    <Card className="w-full h-[300px] p-6 flex flex-col items-center justify-center bg-white hover:shadow-lg transition-shadow">
      <Icon className="w-12 h-12 text-primary mb-4" />
      <h3 className="text-xl font-semibold mb-3 text-primary-dark text-center">
        {title}
      </h3>
      <p className="text-gray-600 text-center">
        {description}
      </p>
    </Card>
  );
};