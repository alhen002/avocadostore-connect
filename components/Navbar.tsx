import React from "react";

import NavLink from "@/components/NavLink";

const navItems = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "dashboard",
    href: "/dashboard",
  },
  {
    name: "profile",
    href: "/dashboard/profile",
  },
];
function Navbar() {
  return (
    <header className="flex flex-row items-center justify-between max-w-3xl mx-auto py-6">
      <nav>
        <ul className="flex gap-2">
          {navItems.map((navItem) => (
            <li key={navItem.name}>
              <NavLink href={navItem.href}>{navItem.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
