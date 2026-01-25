import Link from "next/link";

export default function KambazNavigation() {
  return (
    <div id="wd-kambaz-navigation">
      <Link href="/account">Account</Link> <br />
      <Link href="/dashboard">Dashboard</Link> <br />
      <Link href="/courses">Courses</Link> <br />
      <Link href="/calendar">Calendar</Link> <br />
      <Link href="/inbox">Inbox</Link> <br />
      <Link href="/history">History</Link> <br />
      <Link href="/studio">Studio</Link> <br />
      <Link href="/commons">Commons</Link> <br />
      <Link href="/help">Help</Link>
    </div>
  );
}
