import { navMenu } from '../data/navMenu';
import { Button } from './ui/button';
import { useHash } from '@/hooks/useHash';
const NavBar = () => {
  const hash = useHash();
  console.log(hash);
  return (
    <div className="flex items-center justify-center gap-3 py-4">
      <nav className="flex space-x-4">
        {navMenu.map((nav) => (
          <div key={nav.id}>
            {' '}
            <Button
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
