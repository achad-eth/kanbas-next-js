"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import { RootState } from "../../../../store";
import { addAssignment, updateAssignment } from "../reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const router = useRouter();
  const dispatch = useDispatch();

  const assignments = useSelector(
    (state: RootState) => (state.assignmentsReducer as any).assignments
  );

  const existingAssignment = assignments.find(
    (a: any) => a._id === aid && a.course === cid
  );

  const [assignment, setAssignment] = useState<any>({
    _id: "",
    course: cid,
    title: "",
    description: "",
    points: 100,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
    submissionType: "ONLINE",
  });

  useEffect(() => {
    if (aid !== "new" && existingAssignment) {
      setAssignment(existingAssignment);
    }
  }, [aid, existingAssignment]);

  const saveAssignment = () => {
    if (aid === "new") {
      dispatch(addAssignment({ ...assignment, course: cid }));
    } else {
      dispatch(updateAssignment(assignment));
    }
    router.push(`/courses/${cid}/assignments`);
  };

  return (
    <div id="wd-assignment-editor" className="pb-5" style={{ maxWidth: 900 }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="m-0">Assignment Editor</h2>
        <div>
          <Link
            href={`/courses/${cid}/assignments`}
            className="btn btn-secondary me-2"
            id="wd-cancel-assignment-btn"
          >
            Cancel
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            id="wd-save-assignment-btn"
            onClick={saveAssignment}
          >
            Save
          </button>
        </div>
      </div>

      <Form>
        <FormGroup className="mb-3">
          <FormLabel>Assignment Name</FormLabel>
          <FormControl
            id="wd-assignment-name"
            value={assignment.title}
            onChange={(e) =>
              setAssignment({ ...assignment, title: e.target.value })
            }
          />
        </FormGroup>

        <FormGroup className="mb-3">
          <FormLabel>Description</FormLabel>
          <FormControl
            id="wd-assignment-description"
            as="textarea"
            rows={6}
            value={assignment.description}
            onChange={(e) =>
              setAssignment({ ...assignment, description: e.target.value })
            }
          />
        </FormGroup>

        <Row className="mb-3">
          <Col md={4}>
            <FormGroup>
              <FormLabel>Points</FormLabel>
              <FormControl
                id="wd-assignment-points"
                type="number"
                value={assignment.points}
                onChange={(e) =>
                  setAssignment({
                    ...assignment,
                    points: parseInt(e.target.value) || 0,
                  })
                }
              />
            </FormGroup>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={4}>
            <FormGroup>
              <FormLabel>Due Date</FormLabel>
              <FormControl
                id="wd-assignment-due-date"
                type="date"
                value={assignment.dueDate}
                onChange={(e) =>
                  setAssignment({ ...assignment, dueDate: e.target.value })
                }
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <FormLabel>Available From</FormLabel>
              <FormControl
                id="wd-assignment-available-from"
                type="date"
                value={assignment.availableFrom}
                onChange={(e) =>
                  setAssignment({
                    ...assignment,
                    availableFrom: e.target.value,
                  })
                }
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <FormLabel>Available Until</FormLabel>
              <FormControl
                id="wd-assignment-available-until"
                type="date"
                value={assignment.availableUntil}
                onChange={(e) =>
                  setAssignment({
                    ...assignment,
                    availableUntil: e.target.value,
                  })
                }
              />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup className="mb-4">
          <FormLabel>Submission Type</FormLabel>
          <Form.Select
            id="wd-assignment-submission-type"
            value={assignment.submissionType}
            onChange={(e) =>
              setAssignment({
                ...assignment,
                submissionType: e.target.value,
              })
            }
          >
            <option value="ONLINE">Online</option>
            <option value="ON_PAPER">On Paper</option>
            <option value="NO_SUBMISSION">No Submission</option>
          </Form.Select>
        </FormGroup>

        <div className="d-flex justify-content-end">
          <Link
            href={`/courses/${cid}/assignments`}
            className="btn btn-secondary me-2"
            id="wd-cancel-assignment-btn"
          >
            Cancel
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            id="wd-save-assignment-btn"
            onClick={saveAssignment}
          >
            Save
          </button>
        </div>
      </Form>
    </div>
  );
}