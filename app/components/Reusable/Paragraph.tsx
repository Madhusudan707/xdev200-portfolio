import { ParagraphProps } from "@/app/types";

export const Paragraph: React.FC<ParagraphProps> = ({ text, className }) => {
  return <p className={className}>{text}</p>;
};
