import { ReactNode } from "react";
import CourseNavigation from "./Navigation";

export default function CourseLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-courses">
      <table>
        <tbody>
          <tr>
            <td valign="top"><CourseNavigation /></td>
            <td valign="top" width="100%">{children}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
