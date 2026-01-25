import { redirect } from "next/navigation";

export default function CourseRoot() {
  redirect("/courses/1234/home");
}
