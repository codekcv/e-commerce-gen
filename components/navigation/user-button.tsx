"use client";

import { Session } from "next-auth";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

export default function UserButton({ user, expires }: Session) {
  return (
    <div>
      <Button onClick={() => signOut()}>User</Button>;
    </div>
  );
}
