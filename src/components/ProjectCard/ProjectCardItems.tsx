import { FlexBoxContainer, ProjectCard } from "@/components";
import { projectData } from "@/LocalData";

export const ProjectCardItems = () => {
  return (
    <FlexBoxContainer className="flex-col justify-center items-center  h-screen pt-16">
      <FlexBoxContainer className=" flex-wrap gap-8  justify-center">
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
