import AnimatedTitle from './AnimatedTitle';
import experience from '../datas/exprience';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Expreince = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = gsap.utils.toArray<HTMLDivElement>('.experience-item');
    items.forEach((item) => {
      const progressBar = item.querySelector('.progress-bar');
      const details = item.querySelector('.details');

      gsap.set(progressBar, { height: '20px' });
      gsap.set(details, { opacity: 0, y: 20 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'top 40%',
            scrub: true,
          },
        })
        .to(progressBar, { height: '100%', duration: 1, ease: 'power1.inOut' })
        .to(
          details,
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
          '-=0.3',
        );
    });
  }, []);

  return (
    <section
      id="experience"
      className="min-h-dvh w-screen bg-[#EDFF66] text-black"
    >
      <div className="flex size-full flex-col justify-start items-center py-10 pb-24">
        <div className="relative size-full">
          <AnimatedTitle
            title="Experience <br/> Some of them"
            className="mt-5 pointer-events-none !text-black !p-0 !font-bold text-left  relative z-10"
          />
        </div>
      </div>
      <div ref={containerRef} className="space-y-8 py-20 px-4">
        {experience.map((item) => (
          <div
            key={item.id}
            className="experience-item flex gap-2 p-6 relative overflow-hidden "
          >
            <progress className="progress-bar w-2 !bg-white rounded-full transition-all" />
            <div>
              <div className="font-bold text-lg">{item.name}</div>
              <div className="details mt-2 text-sm opacity-0">
                <div className="font-semibold">{item.role}</div>
                <div className="text-gray-600">{item.duration}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expreince;
