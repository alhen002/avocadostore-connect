import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <div className={"h-screen bg-neutral-100 grid place-items-center"}>
      <div className={"w-3/4 h-3/4 grid grid-cols-2 "}>
        <div
          className={
            " relative grid-span-1 h-full bg-neutral-800 grid place-items-center text-neutral-100 "
          }
        >
          <Image
            src={"/background.jpg"}
            alt={"image-background"}
            fill
            className={"object-fill"}
          />
          <div className={"absolute bottom-24 left-12 flex flex-col gap-4"}>
            <h1 className={" text-7xl font-extrabold"}>Hallo!</h1>
            <p className={" text-6xl"}>Willkommen zurück.</p>
          </div>
        </div>

        <div
          className={
            "grid-span-2 h-full bg-neutral-200 grid place-items-center"
          }
        >
          <Card className={"p-6 w-1/2 border-none bg-neutral-50"}>
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
      </div>
    </div>
  );
}
