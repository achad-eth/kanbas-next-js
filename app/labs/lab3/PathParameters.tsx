import Link from "next/link";

export default function PathParameters() {
  return (
    <div id="wd-path-parameters">
      <h4>Path Parameters</h4>
      <ul>
        <li>
          <Link href="/labs/lab3/add/1/2">1 + 2</Link>
        </li>
        <li>
          <Link href="/labs/lab3/add/3/4">3 + 4</Link>
        </li>
      </ul>
      <hr />
    </div>
  );
}