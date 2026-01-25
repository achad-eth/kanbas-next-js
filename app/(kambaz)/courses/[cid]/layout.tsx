import CourseNavigation from "./Navigation";

export default async function CourseLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;

  return (
    <div>
      {}
      <h2>CS Course {cid}</h2>
      <hr />

      {}
      <table width="100%">
        <tbody>
          <tr>
            <td valign="top" width="200">
              <CourseNavigation cid={cid} />
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