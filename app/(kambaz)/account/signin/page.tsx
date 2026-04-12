"use client";

import Link from "next/link";
import { FormControl, Button } from "react-bootstrap";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();

  const signin = async () => {
    try {
      await axios.post(
        `${HTTP_SERVER}/api/users/signin`,
        credentials,
        { withCredentials: true }
      );
      router.push("/account/profile");
    } catch (error) {
      console.error(error);
      alert("Invalid username or password");
    }
  };

  return (
    <div id="wd-signin-screen" style={{ maxWidth: 300 }}>
      <h1>Sign in</h1>

      <FormControl
        id="wd-username"
        placeholder="username"
        className="mb-2"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />

      <FormControl
        id="wd-password"
        type="password"
        placeholder="password"
        className="mb-3"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />

      <Button
        id="wd-signin-btn"
        className="btn btn-primary w-100 mb-2"
        onClick={signin}
      >
        Sign in
      </Button>

      <Link id="wd-signup-link" href="/account/signup">
        Sign up
      </Link>
    </div>
  );
}