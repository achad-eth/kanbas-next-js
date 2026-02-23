"use client";
import { usePathname } from "next/navigation";

export default function ClientComponentDemo() {
  const pathname = usePathname();
  return (
    <div id="wd-client-component-demo">
      <h2>Client Component Demo</h2>
      <p>Current pathname: {pathname}</p>
      <hr />
    </div>
  );
}