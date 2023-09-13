import { FlexBoxContainer, Chip, Paragraph } from "@/components";
import { TechStackExperienceProps } from "@/types";

export const TechStackExperience: React.FC<TechStackExperienceProps> = ({
  techStack,
}) => {
  return (
    <FlexBoxContainer className="flex-col py-1 lg:w-3/12 lg:gap-y-0 gap-y-2">
      <Paragraph
        text="TechStack"
        className="text-xs lg:text-center font-bold "
      />
      <FlexBoxContainer className="flex-wrap lg:justify-center ">
        {techStack.map((item) => (
          <Chip key={item} className="bg-white text-black font-light">
            {item}
          </Chip>
        ))}
      </FlexBoxContainer>
    </FlexBoxContainer>
  );
};
