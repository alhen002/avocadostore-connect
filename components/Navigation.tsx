import React from "react";

import NavLink from "@/components/NavLink";

const navItems = [
  {
    name: "profile",
    href: "/admin/profile",
  },
  {
    name: "orders",
    href: "/admin/orders",
  },
];
function Navigation() {
  return (
    <nav>
      <ul className="flex flex-col gap-2">
        {navItems.map((navItem) => (
          <li key={navItem.name}>
            <NavLink href={navItem.href}>{navItem.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
