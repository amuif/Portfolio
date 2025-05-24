import AnimatedTitle from './AnimatedTitle';

const Contact = () => {
  return (
    <div
      id="contact"
      className=" min-h-screen bg-black text-white place-content-center"
    >
      <div className="p-5 ">
        <AnimatedTitle
          title="Contact Me"
          className="font-zentry text-2xl lg:text-3xl font-bold whitespace-nowrap"
        />
        <div className="grid grid-col grid-cols-2 place-content-center pt-6">
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

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
