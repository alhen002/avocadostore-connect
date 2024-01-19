import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import { AppProps } from "next/app";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });
// Create a client
const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps: { session, pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <main
          className={cn(
            `z-0 mx-auto w-full flex min-h-screen align-center gap-12 flex-col py-12 px-4 md:px-24 bg-neutral-100 dark:bg-neutral-900 transition-colors duration-500`,
            inter.className
          )}
        >
          <Component {...pageProps} />
        </main>
      </QueryClientProvider>
    </SessionProvider>
  );
}
