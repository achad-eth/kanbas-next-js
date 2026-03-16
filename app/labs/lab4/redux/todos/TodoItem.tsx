"use client";

import { useDispatch } from "react-redux";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({
  todo,
}: {
  todo: { id: string; title: string };
}) {
  const dispatch = useDispatch();

  return (
    <ListGroupItem key={todo.id}>
      <Button
        onClick={() => dispatch(deleteTodo(todo.id))}
        id="wd-delete-todo-click"
        className="me-2"
        variant="danger"
      >
        Delete
      </Button>

      <Button
        onClick={() => dispatch(setTodo(todo))}
        id="wd-set-todo-click"
        className="me-2"
        variant="warning"
      >
        Edit
      </Button>

      {todo.title}
    </ListGroupItem>
  );
}