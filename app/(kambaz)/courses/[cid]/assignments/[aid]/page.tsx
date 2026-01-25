export default function AssignmentEditor({
  params,
}: {
  params: { cid: string; aid: string };
}) {
  return (
    <div id="wd-assignment-editor">
      <h2>Assignment Name</h2>

      <input defaultValue="A1 - ENV + HTML" />
      <br />
      <br />

      <textarea
        cols={70}
        rows={10}
        defaultValue={`The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the labs assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.`}
      />

      <br />
      <br />

      <div>
        <label style={{ display: "inline-block", width: "120px" }}>Points</label>
        <input defaultValue={100} />
      </div>

      <br />

      <div>
        <label style={{ display: "inline-block", width: "120px" }}>
          Assignment Group
        </label>
        <select defaultValue="ASSIGNMENTS">
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="TESTS">TESTS</option>
          <option value="PROJECTS">PROJECTS</option>
        </select>
      </div>

      <br />

      <div>
        <label style={{ display: "inline-block", width: "120px" }}>
          Display Grade as
        </label>
        <select defaultValue="PERCENTAGE">
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
          <option value="LETTER">Letter</option>
        </select>
      </div>

      <br />

      <div>
        <label style={{ display: "inline-block", width: "120px" }}>
          Submission Type
        </label>
        <select defaultValue="ONLINE">
          <option value="ONLINE">Online</option>
          <option value="IN_PERSON">In-Person</option>
        </select>
      </div>

      <br />

      <div style={{ marginLeft: "120px" }}>
        <h4>Online Entry Options</h4>

        <div>
          <input type="checkbox" id="wd-text-entry" />
          <label htmlFor="wd-text-entry"> Text Entry</label>
        </div>

        <div>
          <input type="checkbox" id="wd-website-url" />
          <label htmlFor="wd-website-url"> Website URL</label>
        </div>

        <div>
          <input type="checkbox" id="wd-media-recordings" />
          <label htmlFor="wd-media-recordings"> Media Recordings</label>
        </div>

        <div>
          <input type="checkbox" id="wd-student-annotation" />
          <label htmlFor="wd-student-annotation"> Student Annotation</label>
        </div>

        <div>
          <input type="checkbox" id="wd-file-uploads" />
          <label htmlFor="wd-file-uploads"> File Uploads</label>
        </div>
      </div>

      <br />

      <div style={{ marginLeft: "120px" }}>
        <div>
          <label style={{ display: "inline-block", width: "110px" }}>
            Assign to
          </label>
          <input defaultValue="Everyone" />
        </div>

        <br />

        <div>
          <label style={{ display: "inline-block", width: "110px" }}>Due</label>
          <input type="date" defaultValue="2024-05-13" />
        </div>

        <br />

        <div>
          <label style={{ display: "inline-block", width: "110px" }}>
            Available from
          </label>
          <input type="date" defaultValue="2024-05-06" />
          <span style={{ display: "inline-block", width: "30px" }} />
          <label style={{ display: "inline-block", width: "40px" }}>Until</label>
          <input type="date" defaultValue="2024-05-20" />
        </div>

        <br />
        <hr />

        <div style={{ textAlign: "right" }}>
          <button>Cancel</button>{" "}
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}