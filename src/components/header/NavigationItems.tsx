import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const NavigationItems = ({ onItemClick }: { onItemClick?: () => void }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

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
          className={`
            relative
            ${location.pathname === item.href 
              ? 'text-primary' 
              : 'text-gray-700 hover:text-primary'
            }
            font-secondary font-bold 
            transition-colors duration-200
            group
            pb-1
          `}
        >
          {item.name}
          <div
            className={`
              absolute bottom-0 left-0 w-full h-0.5
              transition-all duration-200
              ${location.pathname === item.href 
                ? 'bg-primary' 
                : 'bg-gray-700 group-hover:bg-primary'
              }
            `}
          />
        </button>
      ))}
    </div>
  );
};