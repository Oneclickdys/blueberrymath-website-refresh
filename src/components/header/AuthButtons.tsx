import { LogIn, UserPlus } from 'lucide-react';
import { Button } from '../ui/button';
import { getDashboardUrl } from '@/utils/regionUtils';

interface AuthButtonsProps {
  onLoginClick: () => void;
  className?: string;
}

export const AuthButtons = ({ onLoginClick, className }: AuthButtonsProps) => {
  const handleSignUp = () => {
    const dashboardUrl = getDashboardUrl();
    window.open(dashboardUrl, '_blank');
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Button
        variant="ghost"
        size="sm"
        onClick={onLoginClick}
        className="flex items-center gap-2"
      >
        <LogIn className="h-4 w-4" />
        Login
      </Button>
      <Button
        variant="default"
        size="sm"
        onClick={handleSignUp}
        className="flex items-center gap-2"
      >
        <UserPlus className="h-4 w-4" />
        Sign Up
      </Button>
    </div>
  );
};