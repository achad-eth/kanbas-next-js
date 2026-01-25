import Link from "next/link";

export default function LabsTOC() {
  return (
    <div id="wd-labs-toc">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/labs/lab1">Lab 1</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3</Link>
        </li>
        <li>
  <Link href="/account/signin">Kambaz</Link>
</li>

      </ul>

      <hr />

      <a
        id="wd-github"
        href="https://github.com/achad-eth/kanbas-next-js"
        target="_blank"
        rel="noreferrer"
      >
        GitHub Repository
      </a>
    </div>
  );
}
