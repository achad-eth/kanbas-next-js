"use client";

import Link from "next/link";
import { useState } from "react";
import { FormControl } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import * as client from "../client";
import { setCurrentUser } from "../reducer";

export default function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSignin = async () => {
    try {
      const user = await client.signin(credentials);
      dispatch(setCurrentUser(user));
      router.push("/account/profile");
    } catch (e: any) {
      setError(e?.response?.data?.message || "Invalid username or password");
    }
  };

  return (
    <div id="wd-signin-screen" style={{ maxWidth: 300 }}>
      <h1>Sign in</h1>

      {error && <div className="alert alert-danger">{error}</div>}

      <FormControl
        id="wd-username"
        placeholder="username"
        className="mb-2"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />

      <FormControl
        id="wd-password"
        type="password"
        placeholder="password"
        className="mb-3"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        onKeyDown={(e) => { if (e.key === "Enter") handleSignin(); }}
      />

      <button
        id="wd-signin-btn"
        className="btn btn-primary w-100 mb-2"
        onClick={handleSignin}
      >
        Sign in
      </button>

      <Link id="wd-signup-link" href="/account/signup">
        Sign up
      </Link>
    </div>
  );
}
