import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface LanguageSelectorProps {
  onLanguageChange?: () => void;
}

export const LanguageSelector = ({ onLanguageChange }: LanguageSelectorProps) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    onLanguageChange?.();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={t('language.select')}>
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage('en')}>
          {t('language.en')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('es')}>
          {t('language.es')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('pt')}>
          {t('language.pt')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};