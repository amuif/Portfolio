import AnimatedTitle from './AnimatedTitle';

const Expreince = () => {
  return (
    <section
      id="expreince"
      className="min-h-dvh w-screen bg-black text-blue-50"
    >
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="text-sm uppercase md:text-base">Exprience</p>
        <div className="relative size-full">
          <AnimatedTitle
            title="Some of them"
            className="text-center mt-5 pointer-events-none mix-blend-difference relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Expreince;
