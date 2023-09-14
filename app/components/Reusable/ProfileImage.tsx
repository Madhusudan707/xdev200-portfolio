import { FlexBoxContainer } from "@/app/components";
import { devData, assetPath } from "@/app/LocalData";
import Image from "next/image";

export const ProfileImage = () => {
  return (
    <FlexBoxContainer className="  rounded-full  w-24 ">
      <Image
        src={`${assetPath.path}${devData.profileImgSrc}`}
        alt="profile"
        width="140"
        height="140"
        className="lg:w-full  w-2/3 h-full object-cover object-center"
      />
    </FlexBoxContainer>
  );
};
