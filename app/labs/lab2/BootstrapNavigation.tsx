"use client";

import { Nav } from "react-bootstrap";

export default function BootstrapNavigation() {
  return (
    <div id="wd-bootstrap-navigation" className="mt-4">
      <h2>Navigation</h2>

      <Nav variant="tabs" defaultActiveKey="home" className="mb-3">
        <Nav.Item>
          <Nav.Link eventKey="home">Home</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="profile">Profile</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav>

      <Nav variant="pills">
        <Nav.Item>
          <Nav.Link active>Active</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link>Link</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link disabled>Disabled</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}