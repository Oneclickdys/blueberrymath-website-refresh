import ReactCardFlip from "react-card-flip";
import { LucideIcon } from "lucide-react";
import { CardFront } from "./CardFront";
import { CardBack } from "./CardBack";

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
  icon,
  backImage,
  backText,
  isFlipped,
  onClick,
}: FeatureCardProps) => {
  return (
    <div className="h-[300px] w-full">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <CardFront
          title={title}
          description={description}
          icon={icon}
          onClick={onClick}
        />

        <CardBack
          title={title}
          backText={backText}
          backImage={backImage}
          onClick={onClick}
        />
      </ReactCardFlip>
    </div>
  );
};