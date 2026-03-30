"use client";

import { useState } from "react";
import { FormControl } from "react-bootstrap";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    title: "Node JS Assignment",
    score: 0,
    completed: false,
  });

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      <h4>Get Assignment</h4>
      <a
        className="btn btn-primary me-2"
        href={`${HTTP_SERVER}/lab5/assignment`}
      >
        Get Assignment
      </a>

      <hr />

      <h4>Update Title</h4>
      <a
        className="btn btn-primary float-end"
        href={`${HTTP_SERVER}/lab5/assignment/title/${assignment.title}`}
      >
        Update Title
      </a>
      <FormControl
        className="w-75 mb-2"
        value={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />

      <hr />

      <h4>Update Score</h4>
      <a
        className="btn btn-success float-end"
        href={`${HTTP_SERVER}/lab5/assignment/score/${assignment.score}`}
      >
        Update Score
      </a>
      <FormControl
        className="w-75 mb-2"
        type="number"
        value={assignment.score}
        onChange={(e) =>
          setAssignment({ ...assignment, score: parseInt(e.target.value) || 0 })
        }
      />

      <hr />

      <h4>Update Completed</h4>
      <a
        className="btn btn-warning me-2"
        href={`${HTTP_SERVER}/lab5/assignment/completed/${assignment.completed}`}
      >
        Update Completed
      </a>
      <div className="form-check mt-2">
        <input
          className="form-check-input"
          type="checkbox"
          checked={assignment.completed}
          onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.checked })
          }
        />
        <label className="form-check-label">Completed</label>
      </div>

      <hr />
    </div>
  );
}