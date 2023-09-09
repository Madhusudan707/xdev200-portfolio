import { FlexBoxContainer } from "@/components";
import { devData, assetPath } from "@/LocalData";
import Image from "next/image";

export const ProfileImage = () => {
  return (
    <FlexBoxContainer className="border-2  rounded-full  w-24">
      <Image
        src={`${assetPath.path}${devData.profileImgSrc}`}
        alt="profile"
        width="140"
        height="140"
        className="w-full h-full object-cover object-center"
      />
    </FlexBoxContainer>
  );
};
