import clsx from 'clsx';
import { useRef, useState, type ReactNode } from 'react';

type BentoCardProps = {
  src: string;
  title: string;
  description: string;
  imageClassName?: string;
  descriptionClassName?: string;
  href: string;
};

const BentoCard = ({
  src,
  title,
  description,
  imageClassName,
  descriptionClassName,
  href,
}: BentoCardProps) => {
  return (
    <div className="relative size-full flex flex-col gap-3 lg:flex-row items-center justify-between p-4">
      <div className="relative z-10 size-full h-full flex flex-col p-3 text-white">
        <h6 className="relative font-zentry uppercase  text-left w-full font-black text-xl  sm:text-3xl  md:text-5xl col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out">
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
      <div className="flex absolute items-center justify-center lg:justify-end py-5 right-0">
        <img
          src={src}
          alt={title}
          className={clsx(
            imageClassName,
            'right-0 top-0 px-2 object-cover h-60 lg:h-96 py-5 size-full w-full  ',
          )}
        />
      </div>
      <div className="absolute bottom-7 left-5 pl-5">
        <button className="bg-white text-black rounded-md p-2 font-robert font-bold">
          <a href={href}>Live Demo</a>
        </button>
      </div>
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
