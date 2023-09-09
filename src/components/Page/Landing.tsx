import { FlexBoxContainer, Heading, ProfileImage } from "@/components";
import { devData } from "@/LocalData";
export const Landing = () => {
  return (
    <FlexBoxContainer className="flex-col items-center justify-center h-[calc(100vh-74px)]">
      <ProfileImage />
      <Heading text={devData.name} className="text-3xl" />
      <Heading text={devData.Designation} className="text-2xl" />
      <Heading
        text="Passionate about User and Developer Experience."
        className="text-xl"
      />
    </FlexBoxContainer>
  );
};
