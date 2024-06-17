"use client";

import { Session } from "next-auth";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

export default function UserButton({ user }: Session) {
  return (
    <div>
      <h1>{user?.email}</h1>
      <Button onClick={() => signOut()}>Sign Out</Button>
    </div>
  );
}
