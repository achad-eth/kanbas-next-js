"use client";

import Link from "next/link";
import { Nav } from "react-bootstrap";

export default function TOC() {
  return (
    <div id="wd-labs-toc" className="mt-4">
      <h2>Labs</h2>

      <Nav variant="pills" className="flex-column">
        <Link className="nav-link" href="/">
          Home
        </Link>
        <Link className="nav-link" href="/labs/lab1">
          Lab 1
        </Link>
        <Link className="nav-link" href="/labs/lab2">
          Lab 2
        </Link>
        <Link className="nav-link" href="/labs/lab3">
          Lab 3
        </Link>
        <Link className="nav-link" href="/account/signin">
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