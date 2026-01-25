import Link from "next/link";

export default function KambazLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <table width="100%">
      <tbody>
        <tr>
          {/* LEFT GLOBAL NAVIGATION */}
          <td valign="top" width="140">
            <ul style={{ listStyle: "none", paddingLeft: "0" }}>
              <li>
                <a href="https://www.northeastern.edu" target="_blank" rel="noreferrer">
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
          </td>

          {/* MAIN CONTENT */}
          <td valign="top">{children}</td>
        </tr>
      </tbody>
    </table>
  );
}