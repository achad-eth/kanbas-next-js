import Modules from "../modules/page";

export default function CourseHome() {
  return (
    <table width="100%">
      <tbody>
        <tr>
          <td valign="top" width="75%">
            <Modules />
          </td>

          <td valign="top" width="25%">
            <h2>Course Status</h2>

            <button>Unpublish</button>{" "}
            <button>Publish</button>

            <br />
            <br />

            <button>Import Existing Content</button>
            <br />
            <button>Import From Commons</button>
            <br />
            <button>Course Home Page</button>
            <br />
            <button>View Course Stream</button>
            <br />
            <button>New Announcement</button>
            <br />
            <button>New Analytics</button>
            <br />
            <button>View Course Notifications</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}