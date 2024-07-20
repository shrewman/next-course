import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-400">
      <ul className="flex">
        <li className="hover:bg-slate-300 px-3 py-2">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:bg-slate-300 px-3 py-2">
          <Link href="/users">Users</Link>
        </li>
        <li className="hover:bg-slate-300 px-3 py-2">
          <Link href="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
