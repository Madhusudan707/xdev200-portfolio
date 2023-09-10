import { FlexBoxContainer, Card } from "@/components";
import { projectData } from "@/LocalData";

export const CardItems = () => {
  return (
    <FlexBoxContainer className="flex-col justify-center items-center  h-screen pt-16">
      <FlexBoxContainer className=" flex-wrap gap-8  justify-center">
        {projectData.map(
          ({ id, name, description, gitHubUrl, demoUrl, npmUrl, lang }) => {
            return (
              <Card
                id={id}
                key={id}
                name={name}
                description={description}
                githubUrl={gitHubUrl}
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
