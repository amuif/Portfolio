import { navMenu } from "../data/nav-menu"
import type { linkProps } from "../types/nav-link"

const NavBar = () => {
    return (
        <div className='border-2 border-black rounded-none w-full md:w-1/2 mx-auto m-5 h-16 flex items-center justify-between p-4 font-archivo '>
            {
                navMenu.map((link: linkProps) => (
                    <a href={link.href} key={link.id} className="">{link.name}</a>
                ))
            }
        </div>
    )
}

export default NavBar