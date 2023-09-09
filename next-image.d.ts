// Import necessary types from next/image
import { ImageLoaderProps } from "next/image";

// Define a type for your Image component
declare module "next/image" {
  interface ImageProps extends ImageLoaderProps {
    // Add any custom props or overrides you need
    alt: string;
    layout?: "fixed" | "intrinsic" | "responsive";
  }
}
