import {
  FlexBoxContainer,
  Heading,
  Paragraph,
  ProfileImage,
  Title,
  Anchor,
} from "@/app/components";
import Image from "next/image";

import {
  devData,
  devExternalInfo,
  devSkills,
  assetPath,
} from "@/app/LocalData";
export const AboutMe = () => {
  return (
    <>
      <Title title="About" />
      <FlexBoxContainer className="flex-col lg:justify-center lg:items-center gap-y-8 h-screen pt-16">
        <FlexBoxContainer className="lg:items-center justify-center lg:gap-x-6 ">
          <ProfileImage />
          <FlexBoxContainer className="flex-col">
            <Heading text={devData.name} className="lg:text-4xl text-sm" />
            <Heading
              text={devData.Designation}
              className="lg:text-xl text-sm lg:text-center"
            />
            <FlexBoxContainer className="justify-center gap-x-2">
              {devSkills.map(({ id, img48, title }) => (
                <Image
                  key={id}
                  src={`${assetPath.langpath48}${img48}`}
                  alt={title}
                  width="24"
                  height="24"
                  className=" h-full object-cover object-center"
                />
              ))}
            </FlexBoxContainer>
          </FlexBoxContainer>
        </FlexBoxContainer>

        <FlexBoxContainer className="flex-col lg:w-6/12 lg:pl-28 lg:gap-y-6 gap-y-4 px-4">
          {devData.AboutMeDetails.map(({ id, content }) => (
            <Paragraph
              key={id}
              text={content}
              className="text-justify text-sm"
            />
          ))}
        </FlexBoxContainer>
        <FlexBoxContainer className="space-x-4 w-1/3 px-4">
          {devExternalInfo.map(
            ({ id, isShow, hyperlink, link, target, rel }) =>
              isShow && (
                <Anchor key={id} href={link} target={target} rel={rel}>
                  <Image
                    key={id}
                    src={`${assetPath.path}${hyperlink}`}
                    alt="profile"
                    width="48"
                    height="48"
                    className=" h-full object-cover object-center"
                  />
                </Anchor>
              )
          )}
        </FlexBoxContainer>
      </FlexBoxContainer>
    </>
  );
};
