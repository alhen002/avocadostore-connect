import React from "react";
import { useSession } from "next-auth/react";

function Profile() {
  const { data: session } = useSession();

  return <section>{session?.user.email}</section>;
}

export default Profile;
