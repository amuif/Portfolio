import { navMenu } from '../data/navMenu';
const NavBar = () => {
  return (
    <div className="flex w-full items-center justify-center mx-auto pt-5 px-2 fixed z-[9999] ">
      <nav className="w-fit shadow-md  rounded-3xl backdrop-blur-md bg-white/20 dark:bg-black/20 text-black  dark:text-white   p-3 flex flex-row mx-auto items-center justify-center gap-5 ">
        {navMenu.map((nav) => (
          <div key={nav.id}>
            {' '}
            <a
              href={nav.href}
              className=" p-2 rounded-full transition-all duration-500"
            >
              {nav.name}
            </a>{' '}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
