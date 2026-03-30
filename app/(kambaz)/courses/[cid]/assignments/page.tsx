"use client";

import Link from "next/link";
import { useEffect } from "react";
import {
  Button,
  FormControl,
  InputGroup,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../../store";
import { deleteAssignment, setAssignments } from "./reducer";
import * as client from "./client";

export default function AssignmentsPage() {
  const { cid } = useParams<{ cid: string }>();
  const assignments = useSelector(
    (state: RootState) => (state.assignmentsReducer as any).assignments
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const loadAssignments = async () => {
      const data = await client.fetchAssignments(cid);
      dispatch(setAssignments(data));
    };
    loadAssignments();
  }, [cid, dispatch]);

  const removeAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

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

          <Link
            href={`/courses/${cid}/assignments/new`}
            className="btn btn-danger btn-lg"
            id="wd-add-assignment-btn"
          >
            <FaPlus className="me-2" />
            Assignment
          </Link>
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

        {assignments
          .filter((a: any) => a.course === cid)
          .map((a: any) => (
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
                      Not available until {a.availableFrom || "TBD"}
                    </span>
                    <br />
                    <span className="fw-bold">Due {a.dueDate || "TBD"}</span>
                    <span className="mx-2">|</span>
                    <span className="fw-bold">{a.points ?? 100} pts</span>
                  </div>
                </div>

                <FaTrash
                  className="text-danger mt-2 me-2"
                  onClick={() => {
                    const ok = window.confirm("Delete this assignment?");
                    if (ok) {
                      removeAssignment(a._id);
                    }
                  }}
                />
                <IoEllipsisVertical className="fs-4 mt-2 text-secondary" />
              </div>
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
}