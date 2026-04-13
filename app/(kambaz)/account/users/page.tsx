"use client";

import { useEffect, useState } from "react";
import { FormControl, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import * as client from "../client";
import PeopleTable from "../../courses/[cid]/people/Table";

export default function UsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();
  const currentUser = useSelector(
    (state: RootState) => (state.accountReducer as any).currentUser
  );

  useEffect(() => {
    if (currentUser && currentUser.role !== "ADMIN") {
      router.push("/account/profile");
      return;
    }
    if (currentUser) fetchUsers();
  }, [currentUser]);

  const fetchUsers = async () => {
    const data = await client.findAllUsers();
    setUsers(data);
  };

  const filterUsersByRole = async (selectedRole: string) => {
    setRole(selectedRole);
    if (selectedRole) {
      const data = await client.findUsersByRole(selectedRole);
      setUsers(data);
    } else {
      fetchUsers();
    }
  };

  const filterUsersByName = async (partialName: string) => {
    setName(partialName);
    if (partialName.trim()) {
      const data = await client.findUsersByPartialName(partialName);
      setUsers(data);
    } else {
      fetchUsers();
    }
  };

  const createUser = async () => {
    const newUser = await client.createUser({
      firstName: "New",
      lastName: `User${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: "password123",
      email: `email${users.length + 1}@neu.edu`,
      section: "S101",
      role: "STUDENT",
    });
    setUsers([...users, newUser]);
  };

  return (
    <div id="wd-users-page">
      <h3>Users</h3>
      <button
        onClick={createUser}
        className="btn btn-danger float-end wd-add-people mb-2"
      >
        <FaPlus className="me-2" />
        Users
      </button>

      <div className="d-flex gap-2 mb-3">
        <FormControl
          placeholder="Search people"
          value={name}
          onChange={(e) => filterUsersByName(e.target.value)}
          className="wd-filter-by-name"
          style={{ maxWidth: 250 }}
        />
        <Form.Select
          value={role}
          onChange={(e) => filterUsersByRole(e.target.value)}
          className="wd-select-role"
          style={{ maxWidth: 200 }}
        >
          <option value="">All Roles</option>
          <option value="STUDENT">Students</option>
          <option value="TA">Assistants</option>
          <option value="FACULTY">Faculty</option>
          <option value="ADMIN">Administrators</option>
        </Form.Select>
      </div>

      <PeopleTable users={users} fetchUsers={fetchUsers} />
    </div>
  );
}
