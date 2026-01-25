import Link from "next/link";

export default function CourseNavigation({ cid }: { cid: string }) {
  return (
    <div id="wd-course-navigation">
      <Link href={`/courses/${cid}/home`}>Home</Link>
      <br />
      <Link href={`/courses/${cid}/modules`}>Modules</Link>
      <br />
      <Link href={`/courses/${cid}/piazza`}>Piazza</Link>
      <br />
      <Link href={`/courses/${cid}/zoom`}>Zoom</Link>
      <br />
      <Link href={`/courses/${cid}/assignments`}>Assignments</Link>
      <br />
      <Link href={`/courses/${cid}/quizzes`}>Quizzes</Link>
      <br />
      <Link href={`/courses/${cid}/grades`}>Grades</Link>
      <br />
      <Link href={`/courses/${cid}/people`}>People</Link>
      <br />
      <Link href={`/courses/${cid}/panopto`}>Panopto</Link>
      <br />
    </div>
  );
}
