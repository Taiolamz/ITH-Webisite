import { ReactNode } from "react";

const Section = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return <section className={`px-28 py-5 ${className}`}>{children}</section>;
};

export default Section;
