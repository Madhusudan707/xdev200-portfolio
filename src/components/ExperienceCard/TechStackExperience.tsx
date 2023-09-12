import { FlexBoxContainer, Chip, Paragraph } from "@/components";
import { TechStackExperienceProps } from "@/types";

export const TechStackExperience: React.FC<TechStackExperienceProps> = ({
  techStack,
}) => {
  return (
    <FlexBoxContainer className="flex-col py-1 w-3/12">
      <Paragraph text="TechStack" className="text-xs text-center " />
      <FlexBoxContainer className="flex-wrap justify-center ">
        {techStack.map((item) => (
          <Chip key={item} className="bg-white text-black font-light">
            {item}
          </Chip>
        ))}
      </FlexBoxContainer>
    </FlexBoxContainer>
  );
};
