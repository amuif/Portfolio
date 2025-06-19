import clsx from 'clsx';
import { useRef, useState, type ReactNode } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from './Theme-Provider';
type BentoCardProps = {
  src: string;
  title: string;
  description: string;
  href: string;
  darkImage?: string;
};

const BentoCard = ({
  darkImage,
  src,
  title,
  description,
  href,
}: BentoCardProps) => {
  const { theme } = useTheme();
  return (
    <Card className="h-full w-full">
      <CardContent className="flex flex-col lg:flex-row items-center justify-evenly h-full w-full">
        <div className=" flex flex-col items-start justify-between h-full w-full lg:w-1/2">
          <div>
            <h4 className="uppercase font-bold text-2xl ">{title}</h4>
            <p className="text-base w-full">{description}</p>
          </div>
          <div>
            <Button>
              <a href={href} target="_blank" rel="referer noopener">
                Live Demo
              </a>
            </Button>
          </div>
        </div>
        <div className="p-5 h-full w-full lg:w-1/2 hidden lg:block">
          <img
            src={theme === 'light' && darkImage ? darkImage : src}
            alt={title}
            className="h-full text-black dark:text-white fill-white rounded-lg w-full object-contain object-center"
          />
        </div>
      </CardContent>
    </Card>
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
      className={clsx(className, 'tn-300')}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};
