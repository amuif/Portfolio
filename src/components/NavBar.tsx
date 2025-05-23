import { useRef, useState } from 'react';
import AnimatedTitle from './AnimatedTitle';
import { CiMenuFries } from 'react-icons/ci';
import { IoCloseOutline } from 'react-icons/io5';
import { useMediaQuery } from 'react-responsive';
const navMenu = [
  {
    id: 1,
    name: 'Home',
    href: '/',
  },
  {
    id: 2,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 3,
    name: 'Experience',
    href: '#experience',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];
const NavBar = () => {
  const navContainer = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width:1024px)' });
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      ref={navContainer}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none bg-black rounded-2xl transition-all duration-700 sm:inset-x-6 "
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            {/* place the image here*/}
            <AnimatedTitle
              title="Ibrahim Hassen"
              className="!text-lg !px-2 !text-left font-bold text-white"
            />
          </div>
          <div>
            <nav className="flex flex-row gap-5">
              {isMobile ? (
                <div className="">
                  <div className="flex flex-col gap-3">
                    {isOpen ? (
                      <IoCloseOutline onClick={() => setIsOpen(false)} />
                    ) : (
                      <CiMenuFries onClick={() => setIsOpen(true)} />
                    )}
                  </div>
                </div>
              ) : (
                navMenu.map((nav) => (
                  <div key={nav.id}>
                    {' '}
                    <a
                      href={nav.href}
                      className="!text-white text-sm hover:bg-white hover:!text-black p-2 rounded-full transition-all duration-500"
                    >
                      {nav.name}
                    </a>{' '}
                  </div>
                ))
              )}
            </nav>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
