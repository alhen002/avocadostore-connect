import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: React.ReactNode;
}

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Navigation from "@/components/Navigation";

export default function Layout({ children }: LayoutProps) {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-screen w-screen"
    >
      <ResizablePanel
        defaultSize={20}
        className={
          "bg-neutral-200 dark:bg-neutral-900 flex flex-col gap-4 py-24 pl-6"
        }
      >
        <Navigation />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={80}>
        <div className="bg-neutral-50 dark:bg-neutral-700 flex h-full items-center justify-center">
          {children}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
