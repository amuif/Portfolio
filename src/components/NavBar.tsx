import { useRef } from 'react';
import Button from '../ui/button';
import { TiLocationArrow } from 'react-icons/ti';

const NavBar = () => {
  const navContainer = useRef(null);
  return (
    <div
      ref={navContainer}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 "
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            {/* place the image here*/}
            <Button
              id="product-button"
              title="sth"
              rightIcon={<TiLocationArrow />}
              className="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>
          <div></div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
