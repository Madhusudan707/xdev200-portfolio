import React, { ReactNode } from "react";

export type HeadingProps = {
  text: string;
  className?: string;
};

export type ParagraphProps = {
  text: string;
  className?: string;
};

export type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
};

export type AnchorProps = {
  id?: string;
  href: string;
  rel?: string;
  target?: string;
  children: React.ReactNode;
  className?: string;
  isDownload?: boolean;
};

export type FlexBoxContainerProps = {
  className: string | undefined;
  children: ReactNode;
};

export type UrlProps = {
  gitHubUrl?: string;
  demoUrl?: string;
  npmUrl?: string;
};

export type CardProps = {
  id: number;
  name: string;
  description: string;
  gitHubUrl?: string;
  demoUrl?: string;
  npmUrl?: string;
  lang: string[];
};

export type TitleProps = {
  title: string;
};

export type ExperienceCardProps = {
  id: number;
  name: string;
  place: string;
  role: string;
  description: string;
  project: string[];
  techStack: string[];
  fromDate: string;
  toDate: string;
  isShow: boolean;
};

export type ChipProps = {
  children: ReactNode;
  className?: string;
};

export type HeadingExperienceProps = {
  name: string;
  place: string;
  fromDate: string;
  toDate: string;
  role: string;
  description: string;
};

export type DescriptionExperienceProps = {
  description: string;
};

export type ProjectExperienceProps = {
  project: string[];
};

export type TechStackExperienceProps = {
  techStack: string[];
};
