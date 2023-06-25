"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type LinkProps = {
  href: string;
  name: string;
};

const PageLinks = ({ href, name }: LinkProps) => {
  // Show active link
  const pathname = usePathname();
  let isActive = false;

  if (pathname === href) {
    isActive = true;
  }
  return (
    <div className='my-4'>
      <Link
        href={href}
        className={clsx(
          "p-1 cursor-pointer   hover:border-b-4",
          isActive && "bg-teal-900 text-white rounded-sm border-1 "
        )}>
        {name}
      </Link>
    </div>
  );
};

export default PageLinks;
