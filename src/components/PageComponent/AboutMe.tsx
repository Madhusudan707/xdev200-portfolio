import {
  FlexBoxContainer,
  Heading,
  Paragraph,
  ProfileImage,
  Title,
  Anchor,
} from "@/components";
import Image from "next/image";

import { devData, devExternalInfo, devSkills, assetPath } from "@/LocalData";
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
            <FlexBoxContainer className="justify-center gap-x-2">
              {devSkills.map(({ id, img48 }) => (
                <Image
                  key={id}
                  src={`${assetPath.langpath48}${img48}`}
                  alt="profile"
                  width="24"
                  height="24"
                  className=" h-full object-cover object-center"
                />
              ))}
            </FlexBoxContainer>
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
        <FlexBoxContainer className="space-x-4 w-1/3 px-4">
          {devExternalInfo.map(({ id, hyperlink, link, target, rel }) => (
            <Anchor key={id} href={link} target={target} rel={rel} className="">
              <Image
                key={id}
                src={`${assetPath.path}${hyperlink}`}
                alt="profile"
                width="48"
                height="48"
                className=" h-full object-cover object-center"
              />
            </Anchor>
          ))}
        </FlexBoxContainer>
      </FlexBoxContainer>
    </>
  );
};
