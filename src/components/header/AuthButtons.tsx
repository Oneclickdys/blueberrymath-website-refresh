import { LogIn, UserPlus } from 'lucide-react';
import { Button } from '../ui/button';
import { getDashboardUrl } from '@/utils/regionUtils';
import { useTranslation } from 'react-i18next';

interface AuthButtonsProps {
  onLoginClick: () => void;
  className?: string;
}

export const AuthButtons = ({ onLoginClick, className }: AuthButtonsProps) => {
  const { t } = useTranslation();

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
        className="flex items-center gap-2 rounded-full text-[#5A34E1] hover:text-white hover:bg-[#3703A4] text-body-m font-bold"
      >
        <LogIn className="h-4 w-4" />
        {t('header.login')}
      </Button>
      <Button
        variant="default"
        size="sm"
        onClick={handleSignUp}
        className="flex items-center gap-2 rounded-full bg-primary hover:bg-primary-hover text-body-m font-bold text-white"
      >
        <UserPlus className="h-4 w-4" />
        {t('header.signup')}
      </Button>
    </div>
  );
};