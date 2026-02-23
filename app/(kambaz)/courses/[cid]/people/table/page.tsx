"use client";

import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "next/navigation";

import * as db from "../../../../database";

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  loginId: string;
  section: string;
  lastActivity: string;
  totalActivity: string;
};

type Enrollment = {
  _id: string;
  user: string;
  course: string;
  role: string;
};

export default function PeopleTable() {
  const { cid } = useParams<{ cid: string }>();

  const users = db.users as User[];
  const enrollments = (db.enrollments as Enrollment[]).filter(
    (e) => e.course === cid
  );

  const people = enrollments.map((e) => {
    const user = users.find((u) => u._id === e.user);
    return {
      ...user,
      role: e.role,
    };
  });

  return (
    <div id="wd-people-table">
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>

        <tbody>
          {people.map((p) => (
            <tr key={p?._id}>
              <td className="wd-full-name text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">{p?.firstName}</span>{" "}
                <span className="wd-last-name">{p?.lastName}</span>
              </td>
              <td className="wd-login-id">{p?.loginId}</td>
              <td className="wd-section">{p?.section}</td>
              <td className="wd-role">{p?.role}</td>
              <td className="wd-last-activity">{p?.lastActivity}</td>
              <td className="wd-total-activity">{p?.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}