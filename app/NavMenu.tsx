import { SignInButton } from "@/components/buttons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavMenu = () => {
  return (
    <div className="bg-slate-50 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <nav>
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={150} height={80} />
          </Link>
        </nav>
        <ul className="flex gap-5 items-center">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/users">Users</Link>
          </li>
          <li>
            <SignInButton />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
