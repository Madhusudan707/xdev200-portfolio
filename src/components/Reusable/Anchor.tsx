import { AnchorProps } from "@/types";
import Link from "next/link";

export const Anchor: React.FC<AnchorProps> = ({
  id,
  href,
  target,
  rel,
  children,
  className,
  isDownload,
}) => {
  return (
    <Link
      id={id}
      href={href}
      target={target}
      rel={rel}
      className={className}
      download={isDownload && href}
    >
      {children}
    </Link>
  );
};
