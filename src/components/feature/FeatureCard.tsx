import React from 'react';
import { LucideIcon } from "lucide-react";
import { CardFront } from "./CardFront";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  backImage: string;
  backText: string;
  isFlipped: boolean;
  onClick: () => void;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="h-[300px] w-full">
      <CardFront
        title={title}
        description={description}
        icon={icon}
        onClick={() => {}}
      />
    </div>
  );
};