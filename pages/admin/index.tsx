import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { User } from "next-auth";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import { Button } from "@/components/ui/button";

function AdminPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    router.push("/");
  }

  async function handleGenerateToken() {
    await fetch("/api/user/token/generate", {
      method: "POST",
    });
  }

  return (
    <div className={"h-screen bg-neutral-100 flex flex-col gap-12"}>
      <Heading>Almost there</Heading>
      <Paragraph>
        Let us set up your connection. Click on the button underneath to
        generate a secret token, which we will use for a save connection.
      </Paragraph>
      <Button onClick={handleGenerateToken}>Generate Token</Button>
    </div>
  );
}

export default AdminPage;
