import Link from "next/link";

export default function Assignments({
  params,
}: {
  params: { cid: string };
}) {
  const cid = params.cid;

  return (
    <div id="wd-assignments">
      {/* Top controls */}
      <input placeholder="Search for Assignments" />
      <button>+ Group</button>
      <button>+ Assignment</button>

      <h2>
        ASSIGNMENTS 40% of Total <button>+</button>
      </h2>

      <ul>
        <li>
          {/* One clickable assignment */}
          <Link href={`/courses/${cid}/assignments/123`}>A1 - ENV + HTML</Link>
          <br />
          Multiple Modules | <b>Not available until</b> May 6 at 12:00 AM | <br />
          <b>Due</b> May 13 at 11:59 PM | 100 pts
        </li>

        <li>
          <span>A2 - CSS + BOOTSTRAP</span>
          <br />
          Multiple Modules | <b>Not available until</b> May 13 at 12:00 AM | <br />
          <b>Due</b> May 20 at 11:59 PM | 100 pts
        </li>

        <li>
          <span>A3 - JAVASCRIPT + REACT</span>
          <br />
          Multiple Modules | <b>Not available until</b> May 20 at 12:00 AM | <br />
          <b>Due</b> May 27 at 11:59 PM | 100 pts
        </li>
      </ul>
    </div>
  );
}