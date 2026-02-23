import { ReactNode } from "react";
import { FaAlignJustify } from "react-icons/fa";
import CourseNavigation from "./Navigation";
import * as db from "../../database";

type Course = {
  _id: string;
  name: string;
};

export default async function CourseLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;

  const courses = db.courses as Course[];
  const course = courses.find((c) => c._id === cid);

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course?.name || `Course ${cid}`}
      </h2>
      <hr />

      <div className="d-flex">
        <div className="d-none d-md-block me-4">
          <CourseNavigation cid={cid} />
        </div>

        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}