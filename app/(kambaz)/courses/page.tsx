import Link from "next/link";

export default function Courses() {
  return (
    <div id="wd-courses">
      <h1>Courses</h1>
      <ul>
        <li><Link href="/courses/1234">CS1234 React JS</Link></li>
      </ul>
    </div>
  );
}
