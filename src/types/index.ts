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
  href: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
};

export type FlexBoxContainerProps = {
  className: string | undefined;
  children: ReactNode;
};
