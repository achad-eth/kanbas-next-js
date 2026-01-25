import CourseNavigation from "./Navigation";

export default function CourseLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { cid: string };
}) {
  return (
    <div>
      {}
      <h1>CS Course {params.cid}</h1>
      <hr />

      <table width="100%">
        <tbody>
          <tr>
            <td valign="top">
              <CourseNavigation cid={params.cid} />
            </td>
            <td valign="top" width="100%">
              {children}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}