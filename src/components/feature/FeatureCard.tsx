import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  backImage: string;
  backText: string;
  isFlipped: boolean;
  onClick: () => void;
}

export const FeatureCard = ({
  title,
  description,
  icon: Icon,
  backImage,
  backText,
  isFlipped,
  onClick,
}: FeatureCardProps) => {
  return (
    <div 
      className="h-[300px] perspective-1000 cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <Card className="w-full h-full p-6 flex flex-col items-center justify-center bg-white">
            <Icon className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-primary-dark text-center">
              {title}
            </h3>
            <p className="text-gray-600 text-center">
              {description}
            </p>
          </Card>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <Card className="w-full h-full p-6 bg-primary text-white flex flex-col items-center justify-center">
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
        </div>
      </div>
    </div>
  );
};