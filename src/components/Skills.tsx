import { frameworksAndLibraries, languages } from '@/data/skills';
import AnimatedTitle from './AnimatedTitle';

const Tools = () => {
  return (
    <section
      id="skills"
      className="min-h-svh w-full lg:w-[80%] items-center justify-center mx-auto flex flex-col gap-7 py-10"
    >
      <div className="text-center w-full flex items-center justify-center flex-col gap-4">
        <h3 className="text-sm uppercase md:text-base font-robert ">Skills</h3>
        <AnimatedTitle
          title="I mostly work with"
          className=" mt-5  text-center font-zentry"
        />
      </div>
      <div className="flex flex-col gap-10 px-4 ">
        <div>
          <h3 className="text-xl  ">Languages</h3>
          <div className="flex items-center pt-5 justify-start gap-5 flex-wrap ">
            {languages.map(({ id, name, icon: Icon }) => (
              <div key={id} className="" title={name}>
                <Icon className="aspect-square h-10 w-10 lg:h-20 lg:w-20" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl  ">Frameworks and Libraries</h3>
          <div className="flex items-center pt-5 justify-start gap-5 flex-wrap ">
            {frameworksAndLibraries.map(({ id, name, icon: Icon }) => (
              <div key={id} className="" title={name}>
                <Icon className="aspect-square h-10 w-10 lg:h-20 lg:w-20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
