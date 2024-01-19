import React from "react";
import { cn } from "@/lib/utils";
interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

function Paragraph({ children, className }: ParagraphProps) {
  return (
    <p className={cn("prose prose-neutral dark:prose-invert", className)}>
      {children}
    </p>
  );
}
export default Paragraph;
