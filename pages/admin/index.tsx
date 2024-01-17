import React from "react";
import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

function Index() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <Layout>
      <section>admin/</section>
    </Layout>
  );
}

export default Index;
