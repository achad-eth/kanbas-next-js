"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import * as client from "../../../../courses/client";
import PeopleTable from "../Table";

export default function PeopleTablePage() {
  const { cid } = useParams<{ cid: string }>();
  const [people, setPeople] = useState<any[]>([]);

  const loadPeople = async () => {
    const data = await client.findUsersForCourse(cid);
    setPeople(data);
  };

  useEffect(() => {
    loadPeople();
  }, [cid]);

  return <PeopleTable users={people} fetchUsers={loadPeople} />;
}
