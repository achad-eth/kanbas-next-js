"use client";

import { useEffect, useState } from "react";
import { FormControl, Button, Form } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import * as client from "../client";
import { setCurrentUser, clearCurrentUser } from "../reducer";

export default function Profile() {
  const [user, setUser] = useState<any>({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    role: "USER",
  });
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const currentUser = await client.profile();
        dispatch(setCurrentUser(currentUser));
        setUser(currentUser);
      } catch {
        router.push("/account/signin");
      }
    };
    fetchProfile();
  }, []);

  const handleSave = async () => {
    try {
      const updated = await client.updateUser(user);
      dispatch(setCurrentUser(updated));
      setError("");
    } catch (e: any) {
      setError(e?.response?.data?.message || "Save failed");
    }
  };

  const handleSignout = async () => {
    await client.signout();
    dispatch(clearCurrentUser());
    router.push("/account/signin");
  };

  return (
    <div id="wd-profile-screen" style={{ maxWidth: 400 }}>
      <h1>Profile</h1>

      {error && <div className="alert alert-danger">{error}</div>}

      <FormControl
        placeholder="username"
        className="mb-2"
        value={user.username || ""}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <FormControl
        placeholder="password"
        type="password"
        className="mb-2"
        value={user.password || ""}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <FormControl
        placeholder="first name"
        className="mb-2"
        value={user.firstName || ""}
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
      />
      <FormControl
        placeholder="last name"
        className="mb-2"
        value={user.lastName || ""}
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
      />
      <FormControl
        placeholder="email"
        className="mb-2"
        value={user.email || ""}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <FormControl
        placeholder="date of birth"
        type="date"
        className="mb-2"
        value={user.dob ? user.dob.substring(0, 10) : ""}
        onChange={(e) => setUser({ ...user, dob: e.target.value })}
      />

      <Form.Select
        className="mb-3"
        value={user.role || "USER"}
        onChange={(e) => setUser({ ...user, role: e.target.value })}
      >
        <option value="USER">User</option>
        <option value="STUDENT">Student</option>
        <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Admin</option>
      </Form.Select>

      <Button variant="danger" className="w-100 mb-2" onClick={handleSave}>
        Save
      </Button>

      <Button variant="secondary" className="w-100" onClick={handleSignout}>
        Sign out
      </Button>
    </div>
  );
}
