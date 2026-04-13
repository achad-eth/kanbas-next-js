"use client";

import Link from "next/link";
import { useState } from "react";
import { FormControl } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import * as client from "../client";
import { setCurrentUser } from "../reducer";

export default function Signup() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    verifyPassword: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "USER",
  });
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSignup = async () => {
    if (user.password !== user.verifyPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const { verifyPassword: _, ...userToSend } = user;
      const newUser = await client.signup(userToSend);
      dispatch(setCurrentUser(newUser));
      router.push("/account/profile");
    } catch (e: any) {
      setError(e?.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div id="wd-signup-screen" style={{ maxWidth: 300 }}>
      <h1>Sign up</h1>

      {error && <div className="alert alert-danger">{error}</div>}

      <FormControl
        placeholder="username"
        className="mb-2"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <FormControl
        placeholder="password"
        type="password"
        className="mb-2"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <FormControl
        placeholder="verify password"
        type="password"
        className="mb-2"
        value={user.verifyPassword}
        onChange={(e) => setUser({ ...user, verifyPassword: e.target.value })}
      />
      <FormControl
        placeholder="first name"
        className="mb-2"
        value={user.firstName}
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
      />
      <FormControl
        placeholder="last name"
        className="mb-2"
        value={user.lastName}
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
      />
      <FormControl
        placeholder="email"
        className="mb-3"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />

      <button className="btn btn-primary w-100 mb-2" onClick={handleSignup}>
        Sign up
      </button>

      <Link href="/account/signin">Sign in</Link>
    </div>
  );
}
