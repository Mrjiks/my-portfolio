"use client";
import React from "react";
import PageLinks from "./PageLinks";

export const links = [
  { id: 1, href: "/", name: "Home" },
  { id: 2, href: "/blog", name: "Blog" },
  { id: 3, href: "/about", name: "About" },
];

const NavBar = () => {
  return (
    <nav className='container flex items-center justify-between sticky top-0 px-4 py-3 mx-auto bg-[#374151] mb-10'>
      <div>
        <h1 className='text-2xl'>Reddit</h1>
      </div>
      <div className='flex justify-around gap '>
        {links.map((link) => (
          <PageLinks key={link.id} href={link.href} name={link.name} />
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
