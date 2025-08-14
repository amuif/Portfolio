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
    </div>
  );
};

export default NavBar;
