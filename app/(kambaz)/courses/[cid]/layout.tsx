"use client";

import { ReactNode } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { useParams } from "next/navigation";
import { useState } from "react";
import CourseNavigation from "./Navigation";
import * as db from "../../database";

type Course = {
  _id: string;
  name: string;
};

export default function CourseLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { cid } = useParams<{ cid: string }>();
  const [showNavigation, setShowNavigation] = useState(true);

  const courses = db.courses as Course[];
  const course = courses.find((c) => c._id === cid);

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify
          className="me-4 fs-4 mb-1"
          onClick={() => setShowNavigation(!showNavigation)}
          style={{ cursor: "pointer" }}
        />
        {course?.name || `Course ${cid}`}
      </h2>
      <hr />

      <div className="d-flex">
        {showNavigation && (
          <div className="d-none d-md-block me-4">
            <CourseNavigation cid={cid} />
          </div>
        )}

        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}