import { useIsMobile } from '@/hooks/isMobile';
import { navMenu } from '../data/navMenu';
import { Button } from './ui/button';
import { useHash } from '@/hooks/useHash';
const NavBar = () => {
  const hash = useHash();
  const isMobile =useIsMobile()
  return (
    <div className="flex items-center justify-center mx-auto gap-3 py-4">
      <nav className="flex space-x-2">
        {navMenu.map((nav) => (
          <div key={nav.id}>
            {' '}
            <Button
              size={isMobile?'sm':'default'}
              variant="ghost"
              className={`${hash === nav.href ? '!bg-primary text-white dark:text-black' : ''}`}
            >
              <a
                href={nav.href}
                className="p-2 rounded-full transition-all duration-500"
              >
                {nav.name}
              </a>{' '}
            </Button>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
