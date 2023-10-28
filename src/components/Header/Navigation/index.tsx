"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

import ThemeIcon from "@/components/Icons/ThemeIcon";
import { navLinks, themes } from "@/constants";

const Navigation = () => {
  const pathname = usePathname();
  const path = `/${pathname.split("/")[1]}`;

  const handleThemeClick = () => {
    const html = document.querySelector("html");
    const currentTheme = html?.getAttribute(
      "data-theme"
    ) as (typeof themes)[number];
    const currentIndex = themes.indexOf(currentTheme) ?? 0;
    let newIndex = currentIndex == themes.length - 1 ? 0 : currentIndex + 1;
    html?.setAttribute("data-theme", themes[newIndex]);
  };

  return (
    <nav role="navigation" className="h-20 flex items-center justify-between">
      <ul className="flex gap-5 sm:gap-8">
        {navLinks.map((link) => {
          const isActive = path === link.href;

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
      <div
        className="cursor-pointer border-0 rounded-full"
        onClick={handleThemeClick}
      >
        <ThemeIcon />
      </div>
    </nav>
  );
};

export default Navigation;
