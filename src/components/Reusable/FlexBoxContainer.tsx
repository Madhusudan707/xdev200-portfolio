import { FlexBoxContainerProps } from "@/types";

export const FlexBoxContainer: React.FC<FlexBoxContainerProps> = ({
  children,
  className = null,
}) => {
  return <div className={`flex ${className}`}>{children}</div>;
};
