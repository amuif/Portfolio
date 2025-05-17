interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ children, ...props }) => {
  return <p {...props}>{children}</p>;
};

export default Text;
