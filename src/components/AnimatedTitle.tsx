import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import clsx from 'clsx';

gsap.registerPlugin(ScrollTrigger);
interface AnimatedTitleProps {
  title: string;
  className: string;
}
const AnimatedTitle = ({ title, className }: AnimatedTitleProps) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: '100 bottom',
          end: 'center bottom',
          toggleActions: 'play none none reverse',
        },
      });

      titleAnimation.to(
        '.animated-word',
        {
          opacity: 1,
          transform: 'translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)',
          ease: 'power2.inOut',
          stagger: 0.02,
        },
        0,
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={clsx(
        'flex flex-col gap-1 !text-7xl uppercase leading-[0.8] text-white sm:px-32 md:text-[6rem]',
        className,
      )}
    >
      {title.split('<br />').map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(' ').map((word, idx) => (
            <span
              key={idx}
              className="animated-word [transform:translate3d(10px,51px,-60px)_rotateY(60deg)_rotateX(-40deg)] [transform-origin:50%_50%_-150px] [will-change:opacity,transform]"
              dangerouslySetInnerHTML={{ __html: word + '&nbsp;' }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
