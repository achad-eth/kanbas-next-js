"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `list-group-item border-0 ${
      pathname === path ? "active" : "text-danger"
    }`;

  return (
    <div
      id="wd-account-navigation"
      className="list-group fs-5 rounded-0"
      style={{ width: 200 }}
    >
      <Link href="/account/signin" className={linkClass("/account/signin")}>
        Sign in
      </Link>
      <Link href="/account/signup" className={linkClass("/account/signup")}>
        Sign up
      </Link>
      <Link href="/account/profile" className={linkClass("/account/profile")}>
        Profile
      </Link>
    </div>
  );
}