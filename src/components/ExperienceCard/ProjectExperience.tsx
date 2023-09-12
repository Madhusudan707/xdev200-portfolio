import { FlexBoxContainer, Chip, Paragraph } from "@/components";
import { ProjectExperienceProps } from "@/types";

export const ProjectExperience: React.FC<ProjectExperienceProps> = ({
  project,
}) => {
  return (
    <FlexBoxContainer className="flex-col py-1 w-3/12">
      <Paragraph text="Projects" className="text-xs text-center " />
      <FlexBoxContainer className="flex-wrap justify-center">
        {project.map((item) => (
          <Chip key={item} className="bg-white text-black font-light">
            {item}
          </Chip>
        ))}
      </FlexBoxContainer>
    </FlexBoxContainer>
  );
};
