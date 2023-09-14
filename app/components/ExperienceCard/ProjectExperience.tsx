import { FlexBoxContainer, Chip, Paragraph } from "@/app/components";
import { ProjectExperienceProps } from "@/app/types";

export const ProjectExperience: React.FC<ProjectExperienceProps> = ({
  project,
}) => {
  return (
    <FlexBoxContainer className="flex-col py-1 lg:w-3/12 lg:gap-y-0 gap-y-2">
      <Paragraph
        text="Projects"
        className="text-xs lg:text-center font-bold  "
      />
      <FlexBoxContainer className="flex-wrap lg:justify-center">
        {project.map((item) => (
          <Chip key={item} className="bg-white text-black font-light">
            {item}
          </Chip>
        ))}
      </FlexBoxContainer>
    </FlexBoxContainer>
  );
};
