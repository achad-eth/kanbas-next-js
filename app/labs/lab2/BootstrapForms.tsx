"use client";

import { Button, Col, Dropdown, Form, InputGroup, Row } from "react-bootstrap";

export default function BootstrapForms() {
  return (
    <div id="wd-bootstrap-forms">
      <div id="wd-css-styling-forms">
        <h2>Forms</h2>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
        <Form.Label className="mt-3">Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </div>

      <div id="wd-css-styling-dropdowns" className="mt-4">
        <h3>Dropdowns</h3>
        <Form.Select>
          <option value="0">Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>

      <div id="wd-css-styling-switches" className="mt-4">
        <h3>Switches</h3>
        <Form.Check type="switch" label="Unchecked switch checkbox input" />
        <Form.Check type="switch" defaultChecked label="Checked switch checkbox input" />
        <Form.Check type="switch" label="Unchecked disabled switch checkbox input" disabled />
        <Form.Check type="switch" defaultChecked label="Checked disabled switch checkbox input" disabled />
      </div>

      <div id="wd-css-styling-range-and-sliders" className="mt-4">
        <h3>Range</h3>
        <Form.Label>Example range</Form.Label>
        <Form.Range min={0} max={5} step={0.5} />
      </div>

      <div id="wd-css-styling-addons" className="mt-4">
        <h3>Addons</h3>

        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <InputGroup.Text>0.00</InputGroup.Text>
          <Form.Control />
        </InputGroup>

        <InputGroup>
          <Form.Control />
          <InputGroup.Text>$</InputGroup.Text>
          <InputGroup.Text>0.00</InputGroup.Text>
        </InputGroup>
      </div>

      <div id="wd-css-responsive-forms-1" className="mt-4">
        <h3>Responsive forms</h3>

        <Row className="mb-3">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" defaultValue="email@example.com" />
          </Col>
        </Row>

        <Row className="mb-3">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" />
          </Col>
        </Row>

        <Row className="mb-3">
          <Form.Label column sm={2}>
            Bio
          </Form.Label>
          <Col sm={10}>
            <Form.Control as="textarea" style={{ height: "100px" }} />
          </Col>
        </Row>
      </div>

      <div id="wd-css-responsive-forms-2" className="mt-4">
        <h3>Responsive forms 2</h3>

        <Form>
          <Row className="mb-3">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" placeholder="Email" />
            </Col>
          </Row>

          <Row className="mb-3">
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Row>

          <fieldset>
            <Row className="mb-3">
              <Form.Label as="legend" column sm={2}>
                Radios
              </Form.Label>
              <Col sm={10}>
                <Form.Check type="radio" label="First radio" name="formHorizontalRadios" defaultChecked />
                <Form.Check type="radio" label="Second radio" name="formHorizontalRadios" />
                <Form.Check type="radio" label="Third radio" name="formHorizontalRadios" />
                <Form.Check type="radio" label="Remember me" name="formHorizontalRadios" />
              </Col>
            </Row>
          </fieldset>

          <Button type="submit">Sign in</Button>
        </Form>
      </div>

      <div className="mt-4">
        <h3>Dropdown component example</h3>
        <Dropdown>
          <Dropdown.Toggle variant="secondary">Dropdown</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>One</Dropdown.Item>
            <Dropdown.Item>Two</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}