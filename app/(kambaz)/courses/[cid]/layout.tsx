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
    <table>
      <tbody>
        <tr>
          <td valign="top">
            <CourseNavigation cid={cid} />
          </td>
          <td valign="top" width="100%">
            {children}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
