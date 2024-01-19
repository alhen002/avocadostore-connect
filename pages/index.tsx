import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LoginForm from "@/components/LoginForm";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    router.push("/admin");
  }

  return (
    <div className={"h-screen bg-neutral-100 flex flex-col gap-12"}>
      <Heading>welcome to a pretty quick solution ✨</Heading>
      <Paragraph>
        this is a really small solution for managing orders between @shopware6 &
        avocodadostore. Best thing is - its completely free.
      </Paragraph>
      <Card
        className={
          "px-6 pt-6 border border-neutral-400 shadow-none rounded bg-neutral-50"
        }
      >
        <CardHeader>
          <CardTitle className={"text-neutral-900"}>
            Avocadostore-Connect
          </CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
