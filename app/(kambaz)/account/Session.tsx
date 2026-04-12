"use client";

import { ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "./client";

export default function Session({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const currentUser = await client.profile();
        dispatch(setCurrentUser(currentUser));
      } catch {
        dispatch(setCurrentUser(null));
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [dispatch]);

  if (loading) {
    return <div className="p-3">Loading...</div>;
  }

  return <>{children}</>;
}