import { ExperienceCard, FlexBoxContainer } from "@/components";
import { experienceData } from "@/LocalData";
export const ExperienceCardItems = () => {
  return (
    <FlexBoxContainer className="flex-col justify-center items-center   lg:pt-16 pt-16 w-full lg:px-48 gap-y-4 lg:pb-48">
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
