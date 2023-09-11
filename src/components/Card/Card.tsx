import { FlexBoxContainer, Heading, Paragraph } from "@/components";
import { CardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const Card: React.FC<CardProps> = ({
  id,
  name,
  description,
  githubUrl,
  demoUrl,
  npmUrl,
  lang,
}) => {
  return (
    <FlexBoxContainer className="flex-col border w-1/4 px-4 py-2 gap-y-4 rounded-md hover:shadow-lg items-stretch">
      <FlexBoxContainer className="flex-col w-full gap-y-4">
        <FlexBoxContainer className="justify-between items-center">
          <Heading text={name} className="font-bold" />
          <FlexBoxContainer className="justify-end gap-x-4 items-end text-blue-500 ">
            <Link
              href={githubUrl}
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
        {lang.map((item) => {
          return (
            <FlexBoxContainer
              key={item}
              className="justify-center items-center m-1 px-2 py-1 border border-bottom bg-blue-400 text-white  border-gray-300 rounded-lg text-base  font-medium"
            >
              <FlexBoxContainer className="flex-initial max-w-full leading-none text-xs ">
                {item}
              </FlexBoxContainer>
            </FlexBoxContainer>
          );
        })}
      </FlexBoxContainer>
    </FlexBoxContainer>
  );
};