import Login from "@/components/Login";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <section>
        {" "}
        Signed in as {session?.user?.email} <br />{" "}
        <button onClick={() => signOut()}>Sign out</button>{" "}
      </section>
    );
  }
  return (
    <section>
      {" "}
      Not signed in <br /> <button onClick={() => signIn()}>
        Sign in
      </button>{" "}
      <Login />
    </section>
  );
}
