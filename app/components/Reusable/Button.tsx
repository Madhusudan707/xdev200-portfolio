import { ButtonProps } from "@/app/types";

export const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};
