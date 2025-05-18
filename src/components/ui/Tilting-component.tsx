import { cn } from '@/lib/utils';
import type { SpringOptions } from 'framer-motion';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';
import Text from './Text';
import { Button } from './button';

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};
interface TiltedComponentProps {
  imageSrc?: React.ComponentProps<'img'>['src'];
  altText?: string;
  captionText?: string;
  header?: string;
  subheader?: string;
  description?: string;
  link?: string;
  containerHeight?: React.CSSProperties['height'];
  containerWidth?: React.CSSProperties['width'];
  imageHeight?: React.CSSProperties['height'];
  imageWidth?: React.CSSProperties['width'];
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  overlayContent?: React.ReactNode;
  displayOverlayContent?: boolean;
  className: string;
}

export default function TiltingComponent({
  imageSrc,
  altText = 'Tilted card image',
  captionText = '',
  header,
  subheader,
  description,
  link,
  scaleOnHover = 1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
  className,
}: TiltedComponentProps) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className={cn(
        className,
        'relative w-full h-full  grid grid-cols-1 lg:grid-cols-2 justify-center gap-5 items-center rounded-[15px] bg-black/15 border-2 [perspective:800px] ',
      )}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="absolute top-4 text-center text-sm block sm:hidden">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}

      {header && (
        <motion.div
          className="relative w-full h-full items-center gap-7 text-left justify-start flex flex-col lg:flex-col [transform-style:preserve-3d]"
          style={{
            rotateX,
            rotateY,
            scale,
          }}
        >
          <motion.div className="w-full ">
            <motion.div className="flex text-left w-full  flex-col  ">
              <Text className="font-bold text-lg lg:text-xl">{header}</Text>
              {subheader && <Text>{subheader}</Text>}
            </motion.div>
            <Text className="w-full pt-3 lg:pt-5">{description}</Text>
          </motion.div>
          <motion.div className="flex items-end justify-start bottom-0 h-full">
            {link && (
              <Button className="rounded-[7px]" size="lg" variant="default">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  Live demo
                </a>
              </Button>
            )}
          </motion.div>
        </motion.div>
      )}
      <motion.div className="relative items-center justify-center flex flex-col lg:flex-col [transform-style:preserve-3d]">
        <motion.img
          src={imageSrc}
          alt={altText}
          style={{
            rotateX,
            rotateY,
            scale,
          }}
          className="relative h-[400px] w-[400px] aspect-square  object-cover rounded-[15px] will-change-transform [transform:translateZ(0)]"
        />

        {displayOverlayContent && overlayContent && (
          <motion.div className="absolute top-0 left-0 z-[2] will-change-transform [transform:translateZ(30px)]">
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {showTooltip && (
        <motion.figcaption
          className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3] hidden sm:block"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption,
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
}
