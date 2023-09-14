import { FlexBoxContainer, ProjectCard } from "@/app/components";
import { projectData } from "@/app/LocalData";

export const ProjectCardItems = () => {
  return (
    <FlexBoxContainer className="flex-col justify-center items-center   pt-16 px-4">
      <FlexBoxContainer className=" lg:flex-wrap lg:flex-row flex-col gap-8  justify-center">
        {projectData.map(
          ({ id, name, description, gitHubUrl, demoUrl, npmUrl, lang }) => {
            return (
              <ProjectCard
                id={id}
                key={id}
                name={name}
                description={description}
                gitHubUrl={gitHubUrl}
                demoUrl={demoUrl}
                npmUrl={npmUrl}
                lang={lang}
              />
            );
          }
        )}
      </FlexBoxContainer>
    </FlexBoxContainer>
  );
};
