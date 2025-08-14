import { navMenu } from "../data/navMenu";
import PillNav from "./ui/PillNav/PillNav";
import { IconPrompt } from "@tabler/icons-react";
const NavBar = () => {
  return (
    <div className="flex items-center justify-center mx-auto gap-3 py-4">
      <PillNav
        logo={IconPrompt}
        logoAlt="Company Logo"
        items={navMenu}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />
      {/* <nav className="flex space-x-2"> */}
      {/*   {navMenu.map((nav) => ( */}
      {/*     <div key={nav.id}> */}
      {/*       {" "} */}
      {/*       <Button */}
      {/*         size={isMobile ? "sm" : "default"} */}
      {/*         variant="ghost" */}
      {/*         className={`${hash === nav.href ? "!bg-primary text-white dark:text-black" : ""}`} */}
      {/*       > */}
      {/*         <a */}
      {/*           href={nav.href} */}
      {/*           className="p-2 rounded-full transition-all duration-500" */}
      {/*         > */}
      {/*           {nav.name} */}
      {/*         </a>{" "} */}
      {/*       </Button> */}
      {/*     </div> */}
      {/*   ))} */}
      {/* </nav> */}
    </div>
  );
};

export default NavBar;
