import { ExperienceCard, FlexBoxContainer } from "@/components";
import { experienceData } from "@/LocalData";
export const ExperienceCardItems = () => {
  return (
    <FlexBoxContainer className="flex-col justify-center items-center  h-screen pt-64 w-full px-48 gap-y-4 pb-48">
      {experienceData.map(
        ({
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
            <ExperienceCard
              id={id}
              key={id}
              name={name}
              place={place}
              role={role}
              description={description}
              project={project}
              techStack={techStack}
              fromDate={fromDate}
              toDate={toDate}
              isShow={isShow}
            />
          );
        }
      )}
    </FlexBoxContainer>
  );
};
