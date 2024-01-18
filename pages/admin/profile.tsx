import React from "react";
import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import { trpc } from "@/lib/trpc";
import { Loader2 } from "lucide-react";

function Profile() {
  const { data: session } = useSession();
  const { data, isLoading, error } = trpc.user.getById.useQuery({
    id: session?.user.id as string,
  });

  if (isLoading) {
    return (
      <Layout>
        <p>
          <Loader2 className={"animate-spin"} />
        </p>
      </Layout>
    );
  }
  if (error) {
    return (
      <Layout>
        <p>Error: {error.message}</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <section>{data?.email}</section>
    </Layout>
  );
}

export default Profile;
