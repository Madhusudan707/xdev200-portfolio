import { ExperienceCardProps } from "@/app/types";
import {
  FlexBoxContainer,
  HeadingExperience,
  ProjectExperience,
  TechStackExperience,
} from "@/app/components";
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
      <FlexBoxContainer className=" lg:flex-row flex-col w-full gap-y-4 ">
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
