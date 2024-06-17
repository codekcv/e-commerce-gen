"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = { href: string; label: string };

export default function BackButton({ href, label }: Props) {
  return (
    <Button className="font-medium w-full">
      <Link aria-label={label} href={href}>
        {label}
      </Link>
    </Button>
  );
}
