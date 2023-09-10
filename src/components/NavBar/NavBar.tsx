import Link from "next/link";
import { FlexBoxContainer } from "..";
import { assetPath, devData, navbarData } from "@/LocalData";
import Image from "next/image";
export const NavBar: React.FC = () => {
  return (
    <nav className="bg-white px-4 py-2 w-full shadow-md fixed  ">
      <FlexBoxContainer className=" flex items-center justify-between w-full ">
        <Link href="/">
          <Image
            src={`${assetPath.path}${devData.logo}`}
            alt="logo"
            width="40"
            height="40"
            className="w-full h-full object-cover object-center"
          />
        </Link>
        <FlexBoxContainer className="flex gap-x-12">
          {navbarData.map(({ id, link, hyperLinkText, target, rel }) => (
            <Link key={id} href={link} target={target} rel={rel}>
              {hyperLinkText}
            </Link>
          ))}
        </FlexBoxContainer>
      </FlexBoxContainer>
    </nav>
  );
};
