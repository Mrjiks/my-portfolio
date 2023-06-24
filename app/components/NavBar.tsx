import Link from "next/link";
import React from "react";
import clsx from "clsx";

export const links = [
  { id: 1, href: "/", name: "Home" },
  { id: 2, href: "/blog", name: "Blog" },
  { id: 3, href: "/about", name: "About" },
];

const isActive = links.map((link) => link.href);
const NavBar = () => {
  return (
    <nav className='flex container mx-auto justify-between py-3'>
      <div>
        <h1 className='text-2xl'>Reddit</h1>
      </div>
      <div className='justify-around flex gap'>
        {links.map((link) => {
          return (
            <>
              <ul className='justify-around flex gap-2 mx-3'>
                <Link href={link.href} key={link.id} className={clsx("text-teal-400")}>
                  {link.name}
                </Link>
              </ul>
            </>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
