import {
  FlexBoxContainer,
  Heading,
  ProfileImage,
  Title,
} from "@/app/components";
import { devData } from "@/app/LocalData";
export const Landing = () => {
  return (
    <>
      <Title title="Home" />
      <FlexBoxContainer className="flex-col items-center justify-center h-[calc(100vh-74px)]">
        <ProfileImage />
        <Heading text={devData.name} className="lg:text-3xl text-2xl" />
        <Heading text={devData.Designation} className="lg:text-2xl text-xl" />
        <Heading
          text="Passionate about creating user-friendly web experiences."
          className="lg:text-xl text-sm text-center"
        />
      </FlexBoxContainer>
    </>
  );
};
