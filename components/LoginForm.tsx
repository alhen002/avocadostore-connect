import React, { FormEvent } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { signIn } from "next-auth/react";

function LoginForm() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    const email = data.get("email");
    console.log(email);
    const password = data.get("password");
    console.log(password);
    await signIn("credentials", {
      email: email as string,
      password: password as string,
      redirect: false,
    });
  }
  return (
    <form className={"flex flex-col gap-6 my-6"} onSubmit={handleSubmit}>
      <div className={"flex flex-col gap-2"}>
        <Label htmlFor={"email"}>Email</Label>
        <Input id={"email"} name={"email"} placeholder={"Your Email Address"} />
      </div>
      <div className={"flex flex-col gap-2"}>
        <Label htmlFor={"password"}>Password</Label>
        <Input
          type={"password"}
          className={"text-neutral-900"}
          id={"password"}
          name={"password"}
          placeholder={"Your super safe password"}
        />
      </div>
      <Button>Login</Button>
    </form>
  );
}

export default LoginForm;
