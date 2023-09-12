import { FlexBoxContainer, Paragraph } from "@/components";
import { DescriptionExperienceProps } from "@/types";

export const DescriptionExperience: React.FC<DescriptionExperienceProps> = ({
  description,
}) => {
  return (
    <FlexBoxContainer className="text-sm text-justify  ">
      <Paragraph text={description} />
    </FlexBoxContainer>
  );
};
