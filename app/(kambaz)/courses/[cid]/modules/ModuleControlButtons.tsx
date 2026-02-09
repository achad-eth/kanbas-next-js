"use client";

import { Button, Dropdown } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <Dropdown className="d-inline me-2">
        <Dropdown.Toggle variant="secondary" size="sm" id="wd-module-settings-btn">
          <GreenCheckmark />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item id="wd-edit-module-btn">Edit</Dropdown.Item>
          <Dropdown.Item id="wd-delete-module-btn">Delete</Dropdown.Item>
          <Dropdown.Item id="wd-move-module-btn">Move</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Button variant="secondary" size="sm" id="wd-module-menu-btn">
        <BsThreeDotsVertical />
      </Button>
    </div>
  );
}