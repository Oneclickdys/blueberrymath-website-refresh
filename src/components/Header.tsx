import { useState } from 'react';
import { Menu, X, Globe, LogIn, UserPlus } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { LoginDialog } from './LoginDialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigation = [
    { name: t('header.howItWorks'), href: '/how-it-works' },
    { name: t('header.activities'), href: '/activities' },
    { name: t('header.implementation'), href: '/implementation' },
    { name: t('header.events'), href: '/events' },
    { name: t('header.about'), href: '/about' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={() => navigate('/')} className="flex items-center">
              <img
                src="/lovable-uploads/22f9bb3c-4e7d-463e-a152-9b4f84097f5c.png"
                alt="Blueberry Math"
                className="h-8 w-auto object-contain"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.href)}
                className="text-gray-700 hover:text-primary font-secondary transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLoginDialogOpen(true)}
                className="flex items-center gap-2"
              >
                <LogIn className="h-4 w-4" />
                Login
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={() => setLoginDialogOpen(true)}
                className="flex items-center gap-2"
              >
                <UserPlus className="h-4 w-4" />
                Sign Up
              </Button>
              
              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
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
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    navigate(item.href);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary font-secondary transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile Login/Signup */}
              <div className="px-3 py-2 space-y-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setLoginDialogOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-2 justify-center"
                >
                  <LogIn className="h-4 w-4" />
                  Login
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => {
                    setLoginDialogOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-2 justify-center"
                >
                  <UserPlus className="h-4 w-4" />
                  Sign Up
                </Button>
              </div>
              
              {/* Mobile Language Selector */}
              <div className="px-3 py-2">
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => {
                      changeLanguage('en');
                      setIsMenuOpen(false);
                    }}
                    className="text-left text-gray-700 hover:text-primary font-secondary"
                  >
                    {t('language.en')}
                  </button>
                  <button
                    onClick={() => {
                      changeLanguage('es');
                      setIsMenuOpen(false);
                    }}
                    className="text-left text-gray-700 hover:text-primary font-secondary"
                  >
                    {t('language.es')}
                  </button>
                  <button
                    onClick={() => {
                      changeLanguage('pt');
                      setIsMenuOpen(false);
                    }}
                    className="text-left text-gray-700 hover:text-primary font-secondary"
                  >
                    {t('language.pt')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Login Dialog */}
      <LoginDialog open={loginDialogOpen} onOpenChange={setLoginDialogOpen} />
    </header>
  );
};