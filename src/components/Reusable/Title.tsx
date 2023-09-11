import { TitleProps } from "@/types";
import Head from "next/head";

export const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <Head>
      <title>Xdev200 | {title}</title>
    </Head>
  );
};
