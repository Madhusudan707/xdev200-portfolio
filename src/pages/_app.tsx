import { NextComponentType } from "next";
import { AppProps } from "next/app";
import { NavBar } from "@/components";
import "globals.css";

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: NextComponentType }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
