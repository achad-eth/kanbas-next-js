"use client";

import { useEffect, useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import axios from "axios";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function WorkingWithArrays() {
  const [todos, setTodos] = useState<any[]>([]);
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    completed: false,
  });

  const fetchTodos = async () => {
    const response = await axios.get(`${HTTP_SERVER}/lab5/todos`);
    setTodos(response.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const createTodo = async () => {
    await axios.post(`${HTTP_SERVER}/lab5/todos`, todo);
    fetchTodos();
  };

  const deleteTodo = async (id: number) => {
    await axios.delete(`${HTTP_SERVER}/lab5/todos/${id}`);
    fetchTodos();
  };

  const updateTodo = async (id: number) => {
    await axios.put(`${HTTP_SERVER}/lab5/todos/${id}`, todo);
    fetchTodos();
  };

  return (
    <div id="wd-working-with-arrays">
      <h3>Working With Arrays</h3>

      <h4>Create Todo</h4>
      <FormControl
        className="mb-2"
        placeholder="Title"
        value={todo.title}
        onChange={(e) =>
          setTodo({ ...todo, title: e.target.value })
        }
      />
      <FormControl
        className="mb-2"
        placeholder="Description"
        value={todo.description}
        onChange={(e) =>
          setTodo({ ...todo, description: e.target.value })
        }
      />
      <div className="form-check mb-2">
        <input
          type="checkbox"
          className="form-check-input"
          checked={todo.completed}
          onChange={(e) =>
            setTodo({ ...todo, completed: e.target.checked })
          }
        />
        <label className="form-check-label">Completed</label>
      </div>
      <Button className="btn btn-primary mb-3" onClick={createTodo}>
        Add Todo
      </Button>

      <hr />

      <h4>Todo List</h4>
      <ul className="list-group">
        {todos.map((t) => (
          <li key={t.id} className="list-group-item">
            <b>{t.title}</b> - {t.description}{" "}
            ({t.completed ? "Completed" : "Not Completed"})
            <div className="float-end">
              <Button
                size="sm"
                className="btn btn-danger me-2"
                onClick={() => deleteTodo(t.id)}
              >
                Delete
              </Button>
              <Button
                size="sm"
                className="btn btn-warning"
                onClick={() => {
                  setTodo(t);
                  updateTodo(t.id);
                }}
              >
                Update
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}