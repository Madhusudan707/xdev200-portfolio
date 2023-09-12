import { ExperienceCardProps } from "@/types";
import {
  FlexBoxContainer,
  Chip,
  DescriptionExperience,
  Paragraph,
  HeadingExperience,
  ProjectExperience,
  TechStackExperience,
} from "@/components";
export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  id,
  name,
  place,
  role,
  description,
  project,
  techStack,
  fromDate,
  toDate,
  isShow,
}) => {
  return (
    <FlexBoxContainer className="flex-col border px-4 py-2 gap-y-4 rounded-md hover:shadow-lg items-stretch w-11/12">
      <FlexBoxContainer className=" w-full gap-y-4 ">
        <HeadingExperience
          name={name}
          place={place}
          fromDate={fromDate}
          toDate={toDate}
          role={role}
          description={description}
        />

        <ProjectExperience project={project} />
        <TechStackExperience techStack={techStack} />
      </FlexBoxContainer>
    </FlexBoxContainer>
  );
};
