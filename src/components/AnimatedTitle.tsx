import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import clsx from 'clsx';

gsap.registerPlugin(ScrollTrigger);
interface AnimatedTitleProps {
  title: string;
  className?: string;
}
const AnimatedTitle = ({ title, className }: AnimatedTitleProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.animated-word', {
        opacity: 0,
        y: 50,
        rotationY: 60,
        rotationX: -40,
        transformOrigin: '50% 50% -150px',
        willChange: 'opacity, transform',
      });

      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
          toggleActions: 'play none none reverse',
        },
      });

      titleAnimation.to('.animated-word', {
        opacity: 1,
        y: 0,
        rotationY: 0,
        rotationX: 0,
        ease: 'power2.out',
        stagger: 0.02,
        duration: 0.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [title]);
  return (
    <div
      ref={containerRef}
      className={clsx(
        'flex flex-col gap-1 text-5xl uppercase leading-[0.8] text-black  dark:text-white sm:px-32 md:text-[6rem] font-zentry',
        className,
      )}
    >
      {title.split('<br/>').map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(' ').map((word, idx) => (
            <span
              key={idx}
              className="animated-word inline-block"
              dangerouslySetInnerHTML={{ __html: word + '&nbsp;' }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
export default AnimatedTitle;
