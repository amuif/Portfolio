import { frameworksAndLibraries, languages } from '@/data/skills';
import AnimatedTitle from './AnimatedTitle';
import { TextAnimate } from './magicui/text-animate';

const Tools = () => {
  return (
    <section
      id="skills"
      className="min-h-svh w-full lg:w-[83%] items-center justify-center mx-auto flex flex-col gap-7 lg:gap-12 py-10"
    >
      <div className="text-center w-full flex items-center justify-center flex-col gap-4">
        <TextAnimate className="text-sm uppercase md:text-base font-robert ">
          Skills
        </TextAnimate>
        <AnimatedTitle
          title="The stack behind my projects"
          className=" mt-5  text-center "
        />
      </div>
      <div className="flex flex-col gap-10 lg:gap-14 px-4 ">
        <div>
          <h3 className="text-xl  text-center">Languages</h3>
          <div className="flex items-center pt-5 justify-center gap-6 flex-wrap ">
            {languages.map(({ id, name, icon: Icon }) => (
              <div
                key={id}
                className="flex flex-col items-center justify-center gap-4"
                title={name}
              >
                <Icon className="aspect-square h-10 w-10 lg:h-20 lg:w-20 " />
                <TextAnimate
                  animation="slideUp"
                  by="word"
                  once
                  className="text-center"
                >
                  {name}
                </TextAnimate>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl text-center ">Frameworks and Libraries</h3>
          <div className="flex items-center pt-5 justify-center gap-5 flex-wrap ">
            {frameworksAndLibraries.map(({ id, name, icon: Icon }) => (
              <div
                key={id}
                className="items-center justify-center gap-4 flex flex-col "
                title={name}
              >
                <Icon className="aspect-square h-10 w-10 lg:h-20 lg:w-20" />
                <TextAnimate
                  animation="slideUp"
                  by="word"
                  once
                  className="text-center"
                >
                  {name}
                </TextAnimate>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
