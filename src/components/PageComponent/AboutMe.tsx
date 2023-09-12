import {
  FlexBoxContainer,
  Heading,
  Paragraph,
  ProfileImage,
  Title,
} from "@/components";

import { devData } from "@/LocalData";
export const AboutMe = () => {
  return (
    <>
      <Title title="About" />
      <FlexBoxContainer className="flex-col justify-center items-center gap-y-8 h-screen pt-16">
        <FlexBoxContainer className="items-center gap-x-6 ">
          <ProfileImage />
          <FlexBoxContainer className="flex-col">
            <Heading text={devData.name} className="text-4xl" />
            <Heading
              text={devData.Designation}
              className="text-xl text-center"
            />
          </FlexBoxContainer>
        </FlexBoxContainer>

        <FlexBoxContainer className="flex-col w-6/12 pl-28 gap-y-6">
          {devData.AboutMeDetails.map(({ id, content }) => (
            <Paragraph
              key={id}
              text={content}
              className="text-justify text-sm"
            />
          ))}
        </FlexBoxContainer>
      </FlexBoxContainer>
    </>
  );
};
