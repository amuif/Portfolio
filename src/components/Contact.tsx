import AnimatedTitle from './AnimatedTitle';
import { Globe } from './magicui/globe';

const Contact = () => {
  return (
    <div
      id="contact"
      className=" min-h-screen bg-black text-white place-content-center"
    >
      <div className="p-5 ">
        <div className="flex flex-col gap-4 items-center justify-center text-center pb-5">
          <h3 className="font-robert text-base ">Contact</h3>
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly items-center w-full  p-5">
          <form className="flex flex-col gap-5 font-robert">
            <div className="flex justify-between items-center flex-col  md:flex-row w-full gap-3">
              <div className="flex flex-col gap-2 w-full h-24">
                <label htmlFor="">Name</label>
                <input
                  placeholder="Enter your name "
                  className="border rounded-md p-2 w-full h-full"
                />
              </div>
              <div className="flex flex-col gap-2 w-full h-24 ">
                <label htmlFor="">Email</label>
                <input
                  placeholder="Enter your email"
                  className="border rounded-md p-2 w-full h-full"
                />
              </div>
            </div>
            <div className="h-32">
              <textarea
                placeholder="Enter subject here"
                className="w-full rounded-md p-2 border h-full"
              />
            </div>
            <div>
              <button className="rounded-full p-3 hover:rounded-md transition-all duration-1000 w-full font-zentry bg-white/80 text-black">
                Send
              </button>
            </div>
          </form>

          <div>
            <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-background px-40 pb-40 pt-8 md:pb-60">
              <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                <AnimatedTitle
                  title="Contact Me"
                  className="font-zentry text-2xl lg:text-3xl font-bold whitespace-nowrap"
                />
              </span>
              <Globe className="top-28  " />
              <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
