import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const NavigationItems = ({ onItemClick }: { onItemClick?: () => void }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const navigation = [
    { name: t('header.howItWorks'), href: '/how-it-works' },
    { name: t('header.activities'), href: '/activities' },
    { name: t('header.implementation'), href: '/implementation' },
    { name: t('header.events'), href: '/events' },
    { name: t('header.about'), href: '/about' },
  ];

  return (
    <div className="flex items-center space-x-6">
      {navigation.map((item) => (
        <button
          key={item.name}
          onClick={() => {
            navigate(item.href);
            onItemClick?.();
          }}
          className="text-gray-700 hover:text-primary font-secondary font-bold transition-colors duration-200"
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};