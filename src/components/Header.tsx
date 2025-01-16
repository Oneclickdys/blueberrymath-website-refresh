import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { LoginDialog } from './LoginDialog';
import { NavigationItems } from './header/NavigationItems';
import { LanguageSelector } from './header/LanguageSelector';
import { AuthButtons } from './header/AuthButtons';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
            <NavigationItems />
            <div className="flex items-center gap-2">
              <AuthButtons onLoginClick={() => setLoginDialogOpen(true)} />
              <LanguageSelector />
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
              <NavigationItems onItemClick={() => setIsMenuOpen(false)} />
              
              {/* Mobile Login/Signup */}
              <div className="px-3 py-2 space-y-2">
                <AuthButtons 
                  onLoginClick={() => {
                    setLoginDialogOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="flex-col w-full"
                />
              </div>
              
              {/* Mobile Language Selector */}
              <div className="px-3 py-2">
                <LanguageSelector onLanguageChange={() => setIsMenuOpen(false)} />
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