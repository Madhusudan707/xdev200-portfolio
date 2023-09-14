import { FlexBoxContainer } from "@/app/components";
import { ChipProps } from "@/app/types";

export const Chip: React.FC<ChipProps> = ({ children, className }) => {
  return (
    <FlexBoxContainer
      className={`justify-center items-center m-1 px-2 py-1 border   border-gray-300 rounded-lg  font-medium ${className} `}
    >
      <FlexBoxContainer className="flex-initial max-w-full leading-none text-xs ">
        {children}
      </FlexBoxContainer>
    </FlexBoxContainer>
  );
};
