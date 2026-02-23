"use client";

import Link from "next/link";
import { Nav } from "react-bootstrap";
import { usePathname } from "next/navigation";

export default function TOC() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div id="wd-labs-toc" className="mt-4">
      <h2>Labs</h2>

      <Nav variant="pills" className="flex-column">
        <Link className={`nav-link ${isActive("/") ? "active" : ""}`} href="/">
          Home
        </Link>

        <Link
          className={`nav-link ${isActive("/labs/lab1") ? "active" : ""}`}
          href="/labs/lab1"
        >
          Lab 1
        </Link>

        <Link
          className={`nav-link ${isActive("/labs/lab2") ? "active" : ""}`}
          href="/labs/lab2"
        >
          Lab 2
        </Link>

        <Link
          className={`nav-link ${isActive("/labs/lab3") ? "active" : ""}`}
          href="/labs/lab3"
        >
          Lab 3
        </Link>

        <Link
          className={`nav-link ${isActive("/account/signin") ? "active" : ""}`}
          href="/account/signin"
        >
          Kambaz
        </Link>

        <a
          id="wd-github"
          className="nav-link"
          href="https://github.com/achad-eth/kanbas-next-js"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Repo
        </a>
      </Nav>
    </div>
  );
}