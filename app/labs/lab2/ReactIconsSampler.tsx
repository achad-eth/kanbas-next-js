"use client";

import { FaReact, FaNodeJs, FaGithub, FaHome, FaRocket, FaBug } from "react-icons/fa";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons">
      <h3>React Icons Sampler</h3>
      <div style={{ fontSize: "2em" }}>
        <FaReact /> <FaNodeJs /> <FaGithub /> <FaHome /> <FaRocket /> <FaBug />
      </div>
    </div>
  );
}