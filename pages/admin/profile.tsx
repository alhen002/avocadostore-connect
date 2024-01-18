import React from "react";
import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

function Profile() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <Layout>
      <section>{session?.user.email}</section>
    </Layout>
  );
}

export default Profile;
