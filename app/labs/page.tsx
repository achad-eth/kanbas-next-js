import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>

      <p>
        <strong>Aryn Chadha</strong>
        <br />
        <a
          id="wd-github"
          href="https://github.com/achad-eth/kanbas-next-js"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/achad-eth/kanbas-next-js
        </a>
      </p>

      <ul>
        <li>
          <Link href="/labs/lab1" id="wd-lab1-link">
            Lab 1
          </Link>
        </li>
        <li>
          <Link href="/labs/lab2" id="wd-lab2-link">
            Lab 2
          </Link>
        </li>
        <li>
          <Link href="/labs/lab3" id="wd-lab3-link">
            Lab 3
          </Link>
        </li>
      </ul>
    </div>
  );
}
