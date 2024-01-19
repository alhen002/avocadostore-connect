import React from "react";

interface HeadingProps {
  children: React.ReactNode;
}

function Heading({ children }: HeadingProps) {
  return (
    <h1 className={"font-medium text-2xl tracking-tighter"}>{children}</h1>
  );
}

export default Heading;
