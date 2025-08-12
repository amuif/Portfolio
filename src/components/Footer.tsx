import { socialMenu } from '../data/socials';
import { navMenu } from '../data/navMenu';

const Footer = () => {
  return (
    <div className=" py-5  ">
      <hr className=" w-full lg:w-[90%] mx-auto py-5" />
      <div className="flex flex-row justify-between items-center w-full lg:w-[60%] mx-auto">
        <div className="hidden lg:block">
          <h1 className="font-zentry whitespace-nowrap font-bold text-2xl lg:text-4xl">
            Lets talk.
          </h1>
        </div>
        <div className="flex flex-row gap-5 lg:gap-24 w-full items-center justify-evenly">
          <div className="flex flex-col">
            <h4 className="font-zentry font-bold pb-3">My Socials</h4>
            <div className="flex flex-col gap-3">
              {socialMenu.map((social) => (
                <a
                  target="_blank"
                  rel="noopener noreferer"
                  href={social.href}
                  key={social.id}
                >
                  {' '}
                  {social.name}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-zentry font-bold pb-3">Short links</h4>
            <div className="flex flex-col gap-3">
              {navMenu.map((menu) => (
                <a href={menu.href} key={menu.id}>
                  {menu.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
