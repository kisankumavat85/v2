"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

type Props = {
  href: string;
  children: ReactNode;
};

const Tab = (props: Props) => {
  const { href, children } = props;
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={href}
        className={twMerge(
          clsx(
            "text-white font-medium opacity-60 hover:opacity-80 border-b-2 border-transparent border-dashed",
            {
              "opacity-100 border-primary": href === pathname,
            }
          )
        )}
      >
        {children}
      </Link>
    </li>
  );
};

export default Tab;
