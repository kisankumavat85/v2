"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

import { navLinks } from "@/constants";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav role="navigation" className="h-20 flex items-center">
      <ul className="flex gap-8">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={twMerge(
                  clsx("text-white opacity-60 hover:opacity-80", {
                    "opacity-100 font-medium border-b-2 border-dashed border-primary":
                      isActive,
                  })
                )}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
