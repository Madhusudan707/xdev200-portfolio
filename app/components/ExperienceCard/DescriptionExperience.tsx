import { FlexBoxContainer, Paragraph } from "@/app/components";
import { DescriptionExperienceProps } from "@/app/types";

export const DescriptionExperience: React.FC<DescriptionExperienceProps> = ({
  description,
}) => {
  return (
    <FlexBoxContainer className="text-sm text-justify  ">
      <Paragraph text={description} />
    </FlexBoxContainer>
  );
};
