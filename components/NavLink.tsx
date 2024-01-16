import Link from "next/link";
import { useRouter } from "next/router";
import { router } from "next/client";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
}

function NavLink({ children, href }: NavLinkProps) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href} className={isActive ? "underline" : ""}>
      {children}
    </Link>
  );
}

export default NavLink;
