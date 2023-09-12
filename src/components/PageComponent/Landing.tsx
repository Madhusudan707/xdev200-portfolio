import { FlexBoxContainer, Heading, ProfileImage, Title } from "@/components";
import { devData } from "@/LocalData";
export const Landing = () => {
  return (
    <>
      <Title title="Home" />
      <FlexBoxContainer className="flex-col items-center justify-center h-[calc(100vh-74px)]">
        <ProfileImage />
        <Heading text={devData.name} className="text-3xl" />
        <Heading text={devData.Designation} className="text-2xl" />
        <Heading
          text="Passionate about creating user-friendly web experiences."
          className="text-xl"
        />
      </FlexBoxContainer>
    </>
  );
};
