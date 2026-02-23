"use client";

import Link from "next/link";
import {
  Button,
  FormControl,
  InputGroup,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import { useParams } from "next/navigation";

import * as db from "../../../database";

type Assignment = {
  _id: string;
  course: string;
  title: string;
  description?: string;
  points?: number;
  dueDate?: string;
  availableFrom?: string;
  availableUntil?: string;
};

export default function AssignmentsPage() {
  const { cid } = useParams<{ cid: string }>();

  const assignments = (db.assignments as Assignment[]).filter(
    (a) => a.course === cid
  );

  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <InputGroup style={{ maxWidth: 420 }}>
          <InputGroup.Text>
            <FaSearch />
          </InputGroup.Text>
          <FormControl id="wd-search-assignment" placeholder="Search" />
        </InputGroup>

        <div className="d-flex gap-2">
          <Button id="wd-add-group-btn" variant="secondary" size="lg">
            <FaPlus className="me-2" />
            Group
          </Button>

          <Button id="wd-add-assignment-btn" variant="danger" size="lg">
            <FaPlus className="me-2" />
            Assignment
          </Button>
        </div>
      </div>

      <ListGroup className="rounded-0" id="wd-assignments-list">
        <ListGroupItem className="wd-assignments-header p-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center fw-bold">
              <BsGripVertical className="me-3 fs-4 text-secondary" />
              <span>ASSIGNMENTS</span>
            </div>

            <div className="d-flex align-items-center">
              <span className="me-3">40% of Total</span>
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
        </ListGroupItem>

        {assignments.map((a) => (
          <ListGroupItem key={a._id} className="wd-assignment-row">
            <div className="d-flex align-items-start">
              <BsGripVertical className="me-3 mt-2 text-secondary" />
              <MdOutlineAssignment className="me-3 mt-1 text-success fs-4" />

              <div className="flex-fill">
                <Link
                  href={`/courses/${cid}/assignments/${a._id}`}
                  className="wd-assignment-link"
                >
                  {a.title}
                </Link>

                <div className="wd-assignment-subtext">
                  <span className="wd-sub-red fw-bold">Multiple Modules</span>
                  <span className="mx-2">|</span>
                  <span className="fw-bold">
                    Not available until {a.availableFrom || "idk"}
                  </span>
                  <br />
                  <span className="fw-bold">Due {a.dueDate || "TBD"}</span>
                  <span className="mx-2">|</span>
                  <span className="fw-bold">{a.points ?? 100} pts</span>
                </div>
              </div>

              <IoEllipsisVertical className="fs-4 mt-2 text-secondary" />
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}