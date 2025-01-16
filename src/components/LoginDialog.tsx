import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { getLoginUrl } from "@/utils/regionUtils";
import { useTranslation } from 'react-i18next';
import { GraduationCap, UserCog } from 'lucide-react';

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
          <DialogTitle className="text-center text-xl">{t('auth.userType.title')}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <Button
            onClick={() => handleUserTypeSelection('teacher')}
            className="w-full h-14 text-lg"
            variant="default"
          >
            <UserCog className="mr-2 h-5 w-5" />
            {t('auth.userType.teacher')}
          </Button>
          <Button
            onClick={() => handleUserTypeSelection('student')}
            className="w-full h-14 text-lg"
            variant="outline"
          >
            <GraduationCap className="mr-2 h-5 w-5" />
            {t('auth.userType.student')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};