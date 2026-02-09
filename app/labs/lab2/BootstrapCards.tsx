"use client";

import { Button, Card } from "react-bootstrap";

export default function BootstrapCards() {
  return (
    <div id="wd-bootstrap-cards" className="mt-4">
      <h2>Cards</h2>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="/images/stacked.jpg" alt="Stacked Starship" />
        <Card.Body>
          <Card.Title>Stacking Starship</Card.Title>
          <Card.Text>Starship stacking at the launch site.</Card.Text>
          <Button variant="primary">Like</Button>
        </Card.Body>
      </Card>
    </div>
  );
}