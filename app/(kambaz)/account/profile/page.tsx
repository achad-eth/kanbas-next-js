"use client";

import { FormControl, Button } from "react-bootstrap";
import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen" style={{ maxWidth: 400 }}>
      <h1>Profile</h1>

      <FormControl placeholder="username" className="mb-2" />
      <FormControl placeholder="password" type="password" className="mb-2" />
      <FormControl placeholder="first name" className="mb-2" />
      <FormControl placeholder="last name" className="mb-2" />
      <FormControl placeholder="email" className="mb-3" />

      <Button variant="danger" className="w-100 mb-2">
        Save
      </Button>

      <Link href="/account/signin" className="btn btn-secondary w-100">
        Sign out
      </Link>
    </div>
  );
}