import {
  FlexBoxContainer,
  Heading,
  Paragraph,
  Chip,
  Anchor,
} from "@/components";
import { CardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const ProjectCard: React.FC<CardProps> = ({
  id,
  name,
  description,
  gitHubUrl,
  demoUrl,
  npmUrl,
  lang,
}) => {
  return (
    <FlexBoxContainer className="flex-col border lg:w-1/4 px-4 py-2 gap-y-4 rounded-md hover:shadow-lg items-stretch">
      <FlexBoxContainer className="flex-col w-full gap-y-4">
        <FlexBoxContainer className="justify-between items-center">
          <Heading text={name} className="font-bold" />
          <FlexBoxContainer className="justify-end gap-x-4 items-end text-blue-500 ">
            <Link
              href={gitHubUrl ?? ""}
              target="_blank"
              rel="noopener noreferrer"
              title="Code"
            >
              <Image src="/assets/git.png" height="20" width="20" alt="git" />
            </Link>

            {demoUrl && (
              <Link
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Live Demo"
              >
                <Image
                  src="/assets/globe.png"
                  height="20"
                  width="20"
                  alt="git"
                />
              </Link>
            )}
            {npmUrl && (
              <Link
                href={npmUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="NPM Package"
              >
                <Image src="/assets/npm.png" height="20" width="20" alt="git" />
              </Link>
            )}
          </FlexBoxContainer>
        </FlexBoxContainer>

        <Paragraph text={description} className="flex-wrap text-xs" />
      </FlexBoxContainer>

      <FlexBoxContainer className="flex-wrap">
        {lang.map((item) => (
          <Chip key={item} className="bg-white text-black font-light">
            {item}
          </Chip>
        ))}
      </FlexBoxContainer>
    </FlexBoxContainer>
  );
};
