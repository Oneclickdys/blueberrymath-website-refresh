import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CardFrontProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
}

export const CardFront = ({ title, description, icon: Icon, onClick }: CardFrontProps) => {
  return (
    <Card className="w-full h-[300px] p-6 flex flex-col items-center justify-center bg-white hover:shadow-lg transition-shadow cursor-pointer" onClick={onClick}>
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