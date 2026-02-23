"use client";

import { useParams } from "next/navigation";

export default function AddPathPage() {
  const { a, b } = useParams<{ a: string; b: string }>();
  const sum = Number(a) + Number(b);

  return (
    <div id="wd-add-path" className="container mt-3">
      <h3>
        {a} + {b} = {sum}
      </h3>
    </div>
  );
}