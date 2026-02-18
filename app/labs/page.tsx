import Link from "next/link";

export default function LabsHome() {
  return (
    <div id="wd-labs-home" style={{ padding: "24px" }}>
      <h1>Labs</h1>
      <h3 className="mb-4">Aryn Chadha</h3>

      <ul>
        <li>
          <Link href="/labs/lab1">Lab 1</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3</Link>
        </li>
      </ul>

      <hr />

    </div>
  );
}