"use client";

import Table from "react-bootstrap/Table";

export default function BootstrapTables() {
  return (
    <div id="wd-bootstrap-tables" className="mt-4">
      <h2>Tables</h2>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Quiz</th>
            <th>Topic</th>
            <th>Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1</td>
            <td>HTML</td>
            <td>01/15</td>
            <td>85</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td>CSS</td>
            <td>01/22</td>
            <td>90</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td>JavaScript</td>
            <td>01/29</td>
            <td>88</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}