import Link from "next/link";
import { FlexBoxContainer, Anchor } from "@/components";
import { assetPath, devData, navbarData } from "@/LocalData";
import Image from "next/image";
export const NavBar: React.FC = () => {
  return (
    <nav className="bg-white px-4 py-2 w-full shadow-md fixed  ">
      <FlexBoxContainer className="  items-center justify-between w-full lg:flex lg:flex-row flex-row-reverse">
        <Anchor href="/" className="">
          <Image
            src={`${assetPath.path}${devData.profileImgSrc}`}
            alt="logo"
            width="32"
            height="32"
            className="w-full h-full object-cover object-center"
          />
        </Anchor>
        <FlexBoxContainer className="flex lg:gap-x-12 lg:text-sm gap-x-8 text-xs">
          {navbarData.map(
            ({ id, hyperLinkText, link, target, rel, isShow, isDownload }) =>
              isShow && (
                <Anchor
                  key={id}
                  href={link}
                  target={target}
                  rel={rel}
                  isDownload={isDownload}
                >
                  {hyperLinkText}
                </Anchor>
              )
          )}
        </FlexBoxContainer>
      </FlexBoxContainer>
    </nav>
  );
};
