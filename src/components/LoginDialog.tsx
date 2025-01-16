import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { getLoginUrl } from "@/utils/regionUtils";
import { useTranslation } from 'react-i18next';

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LoginDialog = ({ open, onOpenChange }: LoginDialogProps) => {
  const { t } = useTranslation();
  
  const handleUserTypeSelection = (userType: 'teacher' | 'student') => {
    const url = getLoginUrl(userType);
    window.open(url, '_blank');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t('auth.userType.title')}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <Button
            onClick={() => handleUserTypeSelection('teacher')}
            className="w-full"
            variant="default"
          >
            {t('auth.userType.teacher')}
          </Button>
          <Button
            onClick={() => handleUserTypeSelection('student')}
            className="w-full"
            variant="outline"
          >
            {t('auth.userType.student')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};