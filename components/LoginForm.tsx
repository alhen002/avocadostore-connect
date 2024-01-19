import React, { FormEvent } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { signIn } from "next-auth/react";
import Paragraph from "@/components/Paragraph";
import { FaGoogle } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";
function LoginForm() {
  //TODO: SERVERSIDE VALIDATION W ZOD & REACT HOOK FORM
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    const email = data.get("email");
    const password = data.get("password");
    await signIn("credentials", {
      email: email as string,
      password: password as string,
      callbackUrl: "/admin",
    });
  }

  return (
    <form className={"flex flex-col gap-6 my-6"} onSubmit={handleSubmit}>
      <div className={"flex flex-col gap-2"}>
        <Label htmlFor={"email"}>Email</Label>
        <Input
          id={"email"}
          name={"email"}
          required
          placeholder={"Your Email Address"}
        />
      </div>
      <div className={"flex flex-col gap-2"}>
        <Label htmlFor={"password"}>Password</Label>
        <Input
          type={"password"}
          className={"text-neutral-900"}
          id={"password"}
          name={"password"}
          required
          min={12}
          placeholder={"Your super safe password"}
        />
      </div>
      <div className={"flex flex-col gap-3 items"}>
        <Button>Login</Button>
        <Paragraph className={"self-center"}>or</Paragraph>
        <Button variant={"outline"}>
          Login with
          <span className={"ml-2"}>
            <FaGoogle />
          </span>
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
