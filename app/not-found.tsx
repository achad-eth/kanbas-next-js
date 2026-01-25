import Link from "next/link";

export default function NotFound() {
  return (
    <div id="wd-page-not-found">
      <h1>Page Not Found</h1>
      <p>Sorry, we could not find that page.</p>

      <Link href="/dashboard">Back to Dashboard</Link>
    </div>
  );
}
