"use client";

import { useState } from "react";
import { Button, Dropdown, Modal, FormControl } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

export default function ModulesControls({
  moduleName,
  setModuleName,
  addModule,
}: {
  moduleName: string;
  setModuleName: (title: string) => void;
  addModule: () => void;
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <Button
        variant="danger"
        size="lg"
        className="me-1 float-end"
        id="wd-add-module-btn"
        onClick={handleShow}
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </Button>

      <Dropdown className="float-end me-2">
        <Dropdown.Toggle variant="secondary" size="lg" id="wd-publish-all-btn">
          <GreenCheckmark /> Publish All
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item id="wd-publish-all">
            <GreenCheckmark /> Publish All
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Button
        variant="secondary"
        size="lg"
        className="me-2 float-end"
        id="wd-view-progress"
      >
        View Progress
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="me-2 float-end"
        id="wd-collapse-all"
      >
        Collapse All
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Module</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <FormControl
            value={moduleName}
            onChange={(e) => setModuleName(e.target.value)}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              addModule();
              handleClose();
            }}
          >
            Add Module
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}