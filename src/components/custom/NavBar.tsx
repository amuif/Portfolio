import React, { useEffect, useState } from 'react';
import { X, AlignRight } from 'lucide-react';
import Text from '../ui/Text';
import { Button } from '../ui/button';
const navbarItems = [
  {
    id: 1,
    name: 'Home',
    href: 'home',
  },
  {
    id: 2,
    name: 'Projects',
    href: 'projects',
  },
  {
    id: 3,
    name: 'About',
    href: 'about',
  },
  {
    id: 4,
    name: 'Contact',
    href: 'contact',
  },
];

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [active, setActive] = useState('home');
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  return (
    <div className="z-50 py-5">
      <div>
        {isMobile ? (
          <MobileNav active={active} setActive={setActive} />
        ) : (
          <DesktopNav active={active} setActive={setActive} />
        )}
      </div>
    </div>
  );
};

export default NavBar;

export function MobileNav({
  active,
  setActive,
}: {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="flex justify-end items-center w-full right-5">
        {toggle ? (
          <X
            className="w-6 h-6 text-white"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <AlignRight
            className="w-6 h-6 text-white"
            onClick={() => setToggle(!toggle)}
          />
        )}
      </div>
      {toggle && (
        <div className="flex flex-col p-5 gap-5 font-medium">
          {navbarItems.map((nav) => (
            <div key={nav.id}>
              <p
                className={`${active === nav.name ? 'text-white' : 'text-muted-foreground'}`}
                onClick={() => setActive(nav.name)}
              >
                <a href={`#${nav.href}`}>{nav.name}</a>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export function DesktopNav({
  active,
  setActive,
}: {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="flex gap-10 font-bold mx-auto items-center justify-center w-full p-5">
      <div className="flex gap-10 ">
        {navbarItems.map((nav) => (
          <div key={nav.id}>
            <Text
              className={`${active === nav.href ? 'text-black dark:text-white' : 'text-muted-foreground'}`}
              onClick={() => setActive(nav.name)}
            >
              <a href={`#${nav.href}`}>{nav.name}</a>
            </Text>
          </div>
        ))}
      </div>
      <div className="flex justify-end items-center gap-3 text-white">
        <Button className="rounded-full px-5 py-3 font-bold text-base">
          Contact me
        </Button>
      </div>
    </div>
  );
}
