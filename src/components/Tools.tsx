import AnimatedTitle from './AnimatedTitle';

const Tools = () => {
  return (
    <section className="min-h-svh w-full  py-10">
      <div className="text-center w-full flex items-center justify-center flex-col gap-4">
        <h3 className="text-sm uppercase md:text-base font-robert ">Skills</h3>
        <AnimatedTitle
          title="I mostly work with"
          className=" mt-5  text-center font-zentry"
        />
      </div>
    </section>
  );
};

export default Tools;
