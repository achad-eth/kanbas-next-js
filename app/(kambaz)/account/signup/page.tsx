"use client";

import Link from "next/link";
import { FormControl, Button } from "react-bootstrap";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function Signup() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    verifyPassword: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "STUDENT",
  });
  const router = useRouter();

  const signup = async () => {
    if (!user.username.trim() || !user.password.trim()) {
      alert("Username and password are required");
      return;
    }

    if (user.password !== user.verifyPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { verifyPassword, ...newUser } = user;
      await axios.post(
        `${HTTP_SERVER}/api/users/signup`,
        newUser,
        { withCredentials: true }
      );
      router.push("/account/profile");
    } catch (error: any) {
      console.error(error);
      alert(error?.response?.data?.message || "Unable to sign up");
    }
  };

  return (
    <div id="wd-signup-screen" style={{ maxWidth: 300 }}>
      <h1>Sign up</h1>

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

      <Button
        className="btn btn-primary w-100 mb-2"
        onClick={signup}
      >
        Sign up
      </Button>

      <Link href="/account/signin">Sign in</Link>
    </div>
  );
}