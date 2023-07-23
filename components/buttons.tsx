"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export function SignInButton() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === "loading") {
    return <>...</>;
  }

  if (status === "authenticated") {
    return (
      <div className="flex items-center">
        <Link href={`/dashboard`}>
          <Image
            src={session.user?.image ?? "/mememan.webp"}
            width={36}
            height={36}
            alt="Your Name"
            className="rounded-full"
          />
        </Link>
        <SignOutButton />
      </div>
    );
  }

  return (
    <button className="bg-green-100 p-2 rounded-sm" onClick={() => signIn()}>
      Sign in
    </button>
  );
}

export function SignOutButton() {
  return (
    <button
      className="bg-red-100 ml-4 p-2 rounded-sm"
      onClick={() => signOut()}
    >
      Sign out
    </button>
  );
}
