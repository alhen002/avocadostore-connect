import Link from "next/link";
import { useRouter } from "next/router";
import { router } from "next/client";
import { buttonVariants } from "@/components/ui/button";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
}

function NavLink({ children, href }: NavLinkProps) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      className={
        isActive
          ? buttonVariants({ variant: "link", className: "underline" })
          : buttonVariants({ variant: "link" })
      }
    >
      {children}
    </Link>
  );
}

export default NavLink;
