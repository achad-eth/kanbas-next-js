"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname();

  const links = [
    { label: "Home", href: `/courses/${cid}/home`, id: "wd-course-home-link" },
    { label: "Modules", href: `/courses/${cid}/modules`, id: "wd-course-modules-link" },
    { label: "Piazza", href: `/courses/${cid}/piazza`, id: "wd-course-piazza-link" },
    { label: "Zoom", href: `/courses/${cid}/zoom`, id: "wd-course-zoom-link" },
    { label: "Assignments", href: `/courses/${cid}/assignments`, id: "wd-course-assignments-link" },
    { label: "Quizzes", href: `/courses/${cid}/quizzes`, id: "wd-course-quizzes-link" },
    { label: "People", href: `/courses/${cid}/people/table`, id: "wd-course-people-link" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          id={l.id}
          className={`list-group-item border-0 ${isActive(l.href) ? "active" : "text-danger"}`}
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}