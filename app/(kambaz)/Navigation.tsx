import Link from "next/link";

export default function KambazNavigation() {
  return (
    <nav id="wd-kambaz-navigation">
      <ul>
        <li>
          <a
            href="https://www.northeastern.edu"
            target="_blank"
            rel="noreferrer"
          >
            Northeastern
          </a>
        </li>

        <li>
          <Link href="/account">Account</Link>
        </li>

        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link href="/courses">Courses</Link>
        </li>

        <li>
          <Link href="/calendar">Calendar</Link>
        </li>

        <li>
          <Link href="/inbox">Inbox</Link>
        </li>

        <li>
          <Link href="/labs">Labs</Link>
        </li>
      </ul>
    </nav>
  );
}
