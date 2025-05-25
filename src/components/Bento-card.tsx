import clsx from 'clsx';
import { useRef, useState, type ReactNode } from 'react';

type BentoCardProps = {
  src: string;
  title: string;
  description: string;
  imageClassName?: string;
};

const BentoCard = ({
  src,
  title,
  description,
  imageClassName,
}: BentoCardProps) => {
  return (
    <div className="relative size-full flex flex-col lg:flex-row items-center justify-between p-4">
      <div className="relative z-10 size-full h-full flex flex-col p-5 text-white">
        <h6 className="relative border-hsla col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out">
          {title}
        </h6>
        {description}
      </div>
      <div className="flex absolute items-center justify-end right-0">
        <img
          src={src}
          alt={title}
          className={clsx(
            imageClassName,
            'right-0 top-0 object-cover  w-full  ',
          )}
        />
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
      className={className}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};
