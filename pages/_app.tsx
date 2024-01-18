import { SessionProvider } from "next-auth/react";
import { AppProps, AppType } from "next/app";
import { trpc } from "@/lib/trpc";
import "@/styles/globals.css";

const MyApp: AppType = ({
  Component,
  pageProps: { session, pageProps },
}: AppProps) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
