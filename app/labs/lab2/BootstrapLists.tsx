"use client";

import ListGroup from "react-bootstrap/ListGroup";

export default function BootstrapLists() {
  return (
    <div id="wd-bootstrap-lists" className="mt-4">
      <h2>Lists</h2>

      <h3>Favorite movies</h3>
      <ListGroup className="mb-4">
        <ListGroup.Item>Interstellar</ListGroup.Item>
        <ListGroup.Item>Inception</ListGroup.Item>
        <ListGroup.Item>The Dark Knight</ListGroup.Item>
      </ListGroup>

      <h3>Favorite books</h3>
      <ListGroup>
        <ListGroup.Item action href="https://www.amazon.com/dp/0596007124" target="_blank" rel="noreferrer">
          Head First Design Patterns
        </ListGroup.Item>
        <ListGroup.Item action href="https://www.amazon.com/dp/0132350882" target="_blank" rel="noreferrer">
          Clean Code
        </ListGroup.Item>
        <ListGroup.Item action href="https://www.amazon.com/dp/0134685997" target="_blank" rel="noreferrer">
          Effective Java
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}