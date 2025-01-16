import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t, i18n } = useTranslation();

  const getLegalAdviceLink = () => {
    switch (i18n.language) {
      case 'es':
        return 'https://oneclickes.notion.site/AVISO-LEGAL-fbd533481668416cb793e3825b9d25a0';
      case 'pt':
        return 'https://oneclickes.notion.site/AVISO-LEGAL-755813a08d02468f9b52281e9799c3c8';
      default:
        return 'https://oneclickes.notion.site/LEGAL-ADVICE-889557f4d0744d04a0376a3b5ec7280b';
    }
  };

  const getCookiesPolicyLink = () => {
    switch (i18n.language) {
      case 'es':
        return 'https://oneclickes.notion.site/POL-TICA-DE-COOKIES-1ebae03f5c2b4d4b89582b6a60928a1f';
      case 'pt':
        return 'https://oneclickes.notion.site/POL-TICA-DE-COOKIES-693bab952aee4dfcb4ceaf8513e2d05c?pvs=25';
      default:
        return 'https://oneclickes.notion.site/COOKIES-POLICY-2ad3675b3161445d84a13da2e37708c1?pvs=4';
    }
  };

  const getPrivacyPolicyLink = () => {
    switch (i18n.language) {
      case 'es':
        return 'https://oneclickes.notion.site/POL-TICA-DE-PRIVACIDAD-67c9edb201d44a34a4ebae3d550a7521';
      case 'pt':
        return 'https://oneclickes.notion.site/POL-TICA-DE-PRIVACIDADE-eb479db932494b2eb449b086b87d0a34';
      default:
        return 'https://oneclickes.notion.site/PRIVACY-POLICY-d2fc5ac5f9bc4de6b724a2710f14518e?pvs=4';
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">{t('footer.support')}:</span>
              <a 
                href="mailto:soporte@blueberrymath.ai"
                className="text-primary hover:text-primary-dark transition-colors"
              >
                soporte@blueberrymath.ai
              </a>
            </div>
            <nav className="flex items-center space-x-8">
              <a 
                href={getLegalAdviceLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {t('footer.legalAdvice')}
              </a>
              <a 
                href={getCookiesPolicyLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {t('footer.cookiesPolicy')}
              </a>
              <a 
                href={getPrivacyPolicyLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {t('footer.privacyPolicy')}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};