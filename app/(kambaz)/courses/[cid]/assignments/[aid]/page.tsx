"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Col, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";

import * as db from "../../../../database";

type Assignment = {
  _id: string;
  course: string;
  title: string;
  description?: string;
  points?: number;
  dueDate?: string;
  availableFrom?: string;
  availableUntil?: string;
  submissionType?: "ONLINE" | "ON_PAPER" | "NO_SUBMISSION";
};

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();

  const assignment = (db.assignments as Assignment[]).find(
    (a) => a._id === aid && a.course === cid
  );

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
          <Link
            href={`/courses/${cid}/assignments`}
            className="btn btn-danger"
            id="wd-save-assignment-btn"
          >
            Save
          </Link>
        </div>
      </div>

      {!assignment && (
        <div className="alert alert-warning">
          Could not find assignment <b>{aid}</b> for course <b>{cid}</b>.
        </div>
      )}

      <Form>
        <FormGroup className="mb-3">
          <FormLabel>Assignment Name</FormLabel>
          <FormControl id="wd-assignment-name" defaultValue={assignment?.title || ""} />
        </FormGroup>

        <FormGroup className="mb-3">
          <FormLabel>Description</FormLabel>
          <FormControl
            id="wd-assignment-description"
            as="textarea"
            rows={6}
            defaultValue={assignment?.description || ""}
          />
        </FormGroup>

        <Row className="mb-3">
          <Col md={4}>
            <FormGroup>
              <FormLabel>Points</FormLabel>
              <FormControl
                id="wd-assignment-points"
                type="number"
                defaultValue={assignment?.points ?? 100}
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
                defaultValue={assignment?.dueDate || ""}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <FormLabel>Available From</FormLabel>
              <FormControl
                id="wd-assignment-available-from"
                type="date"
                defaultValue={assignment?.availableFrom || ""}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <FormLabel>Available Until</FormLabel>
              <FormControl
                id="wd-assignment-available-until"
                type="date"
                defaultValue={assignment?.availableUntil || ""}
              />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup className="mb-4">
          <FormLabel>Submission Type</FormLabel>
          <Form.Select
            id="wd-assignment-submission-type"
            defaultValue={assignment?.submissionType || "ONLINE"}
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
          <Link
            href={`/courses/${cid}/assignments`}
            className="btn btn-danger"
            id="wd-save-assignment-btn"
          >
            Save
          </Link>
        </div>
      </Form>
    </div>
  );
}