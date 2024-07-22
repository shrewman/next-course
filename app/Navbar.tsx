import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-300">
      <ul className="flex">
        <li className="hover:bg-slate-400 transition py-2">
          <Link href="/" className="px-5 py-3">Home</Link>
        </li>
        <li className="hover:bg-slate-400 transition py-2">
          <Link href="/users" className="px-5 py-3">Users</Link>
        </li>
        <li className="hover:bg-slate-400 transition py-2">
          <Link href="/admin" className="px-5 py-3">Admin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
