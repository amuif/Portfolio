import clsx from 'clsx';
import { useRef, useState, type ReactNode } from 'react';

type BentoCardProps = {
  src: string;
  title: string;
  description: string;
  descriptionClassName?: string;
  href: string;
};

const BentoCard = ({
  src,
  title,
  description,
  descriptionClassName,
  href,
}: BentoCardProps) => {
  return (
    <div className="flex size-full flex-col gap-3 lg:flex-row items-center justify-between p-4">
      <div className="z-10 size-full h-full w-full lg:w-1/2 flex flex-col justify-between p-3 text-white">
        <div>
          <h6 className="font-zentry uppercase  text-left w-full font-black text-xl  sm:text-3xl  md:text-5xl col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out">
            {title}
          </h6>
          <p
            className={clsx(
              descriptionClassName,
              'font-robert text-left w-full lg:w-1/2',
            )}
          >
            {description}
          </p>
        </div>
        <div className="bottom-7 mx-auto w-full flex items-center justify-center lg:justify-start lg:pl-5">
          <button className="bg-white text-black rounded-md p-2 font-robert font-bold">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              Live Demo
            </a>
          </button>
        </div>
      </div>
      <img
        src={src}
        alt={title}
        className={clsx(
          'flex  h-80 items-center justify-center lg:justify-end py-2 lg:py-5 right-0 w-full lg:w-1/2',
        )}
      />
    </div>
  );
};

export default BentoCard;

export const BentoTilt = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  const [transformStyle, setTransformStyle] = useState('');
  const itemRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;
    const { left, width, top, height } =
      itemRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;
    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95,0.95,0.95)`;

    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle('');
  };
  return (
    <div
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={clsx(className, 'transition-all duration-300')}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};
