import { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { IoCloseOutline } from 'react-icons/io5';
import { useMediaQuery } from 'react-responsive';
import { navMenu } from '../data/navMenu';
const NavBar = () => {
  const isMobile = useMediaQuery({ query: '(max-width:1024px)' });
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex w-full items-center justify-center mx-auto pt-5 fixed ">
      <nav className="w-fit shadow-md  rounded-3xl backdrop-blur-md text-black z-[100] dark:text-white   p-5 flex flex-row mx-auto items-center justify-center gap-5 ">
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
                className=" p-2 rounded-full transition-all duration-500"
              >
                {nav.name}
              </a>{' '}
            </div>
          ))
        )}
      </nav>
    </div>
  );
};

export default NavBar;
