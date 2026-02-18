import Link from "next/link";

export default function NotFound() {
  return (
    <div id="wd-not-found" className="wd-not-found">
      <h1 className="wd-not-found-title">Page Not Found</h1>

      <p className="wd-not-found-text">
        The requested page could not be found. Please check the page URL or return
        to the dashboard.
      </p>

      <Link href="/dashboard" className="btn btn-primary btn-lg">
        Back to Dashboard
      </Link>
    </div>
  );
}