import { cn } from '@/lib/utils';

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({ children, className, ...props }) => {
  return (
    <p className={cn(className, 'text-white')} {...props}>
      {children}
    </p>
  );
};

export default Text;
