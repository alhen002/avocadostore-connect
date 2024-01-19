import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import { Button } from "@/components/ui/button";
import { useQuery, useQueryClient } from "@tanstack/react-query";

function AdminPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const queryClient = useQueryClient();
  if (status === "unauthenticated") {
    router.push("/");
  }
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch("/api/user/me");
      return res.json();
    },
  });

  async function handleGenerateToken() {
    await fetch("/api/user/token/generate", {
      method: "POST",
    });
    await queryClient.invalidateQueries({ queryKey: ["user"] });
  }

  return (
    <div className={"h-screen bg-neutral-100 flex flex-col gap-12"}>
      <Heading>Almost there</Heading>
      <Paragraph>
        Let us set up your connection. Click on the button underneath to
        generate a secret token, which we will use for a save connection.
      </Paragraph>
      <Paragraph>
        {isLoading && "Is Loading..."}
        {user?.secret}
      </Paragraph>
      <Button onClick={handleGenerateToken}>Generate Token</Button>
    </div>
  );
}

export default AdminPage;
