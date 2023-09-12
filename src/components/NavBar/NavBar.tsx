import Link from "next/link";
import { FlexBoxContainer, Anchor } from "@/components";
import { assetPath, devData, navbarData } from "@/LocalData";
import Image from "next/image";
export const NavBar: React.FC = () => {
  return (
    <nav className="bg-white px-4 py-2 w-full shadow-md fixed  ">
      <FlexBoxContainer className=" flex items-center justify-between w-full ">
        <Anchor href="/">
          <Image
            src={`${assetPath.path}${devData.profileImgSrc}`}
            alt="logo"
            width="32"
            height="32"
            className="w-full h-full object-cover object-center"
          />
        </Anchor>
        <FlexBoxContainer className="flex gap-x-12">
          {navbarData.map(({ id, hyperLinkText, link, target, rel }) => (
            <Link key={id} href={link} target={target} rel={rel} className="">
              {hyperLinkText}
            </Link>
          ))}
        </FlexBoxContainer>
      </FlexBoxContainer>
    </nav>
  );
};
