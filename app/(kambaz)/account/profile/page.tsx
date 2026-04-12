"use client";

import { FormControl, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function Profile() {
  const [profile, setProfile] = useState({
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "STUDENT",
  });

  const router = useRouter();

  const fetchProfile = async () => {
    try {
      const response = await axios.get(
        `${HTTP_SERVER}/api/users/profile`,
        { withCredentials: true }
      );
      setProfile(response.data);
    } catch (error) {
      console.error(error);
      router.push("/account/signin");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const saveProfile = async () => {
    try {
      const response = await axios.put(
        `${HTTP_SERVER}/api/users/profile`,
        profile,
        { withCredentials: true }
      );
      setProfile(response.data);
      alert("Profile updated");
    } catch (error) {
      console.error(error);
      alert("Unable to update profile");
    }
  };

  const signout = async () => {
    try {
      await axios.post(
        `${HTTP_SERVER}/api/users/signout`,
        {},
        { withCredentials: true }
      );
      router.push("/account/signin");
    } catch (error) {
      console.error(error);
      alert("Unable to sign out");
    }
  };

  return (
    <div id="wd-profile-screen" style={{ maxWidth: 400 }}>
      <h1>Profile</h1>

      <FormControl
        placeholder="username"
        className="mb-2"
        value={profile.username}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
      />

      <FormControl
        placeholder="password"
        type="password"
        className="mb-2"
        value={profile.password}
        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
      />

      <FormControl
        placeholder="first name"
        className="mb-2"
        value={profile.firstName}
        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
      />

      <FormControl
        placeholder="last name"
        className="mb-2"
        value={profile.lastName}
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
      />

      <FormControl
        placeholder="email"
        className="mb-3"
        value={profile.email}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
      />

      <Button variant="danger" className="w-100 mb-2" onClick={saveProfile}>
        Save
      </Button>

      <Button variant="secondary" className="w-100" onClick={signout}>
        Sign out
      </Button>
    </div>
  );
}