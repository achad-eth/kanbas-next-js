"use client";

import { useEffect, useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import axios from "axios";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

type Todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

export default function WorkingWithArrays() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<Omit<Todo, "id">>({
    title: "",
    description: "",
    completed: false,
  });
  const [selectedTodoId, setSelectedTodoId] = useState<number | null>(null);

  const fetchTodos = async () => {
    const response = await axios.get(`${HTTP_SERVER}/lab5/todos`);
    setTodos(response.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const createTodo = async () => {
    if (!todo.title.trim()) return;
    await axios.post(`${HTTP_SERVER}/lab5/todos`, todo);
    setTodo({ title: "", description: "", completed: false });
    setSelectedTodoId(null);
    fetchTodos();
  };

  const deleteTodo = async (id: number) => {
    try {
      await axios.delete(`${HTTP_SERVER}/lab5/todos/${id}`);
      fetchTodos();
    } catch (error) {
      console.error(error);
      alert(`Unable to delete Todo with ID: ${id}`);
    }
  };

  const loadTodoIntoEditor = (t: Todo) => {
    setSelectedTodoId(t.id);
    setTodo({
      title: t.title,
      description: t.description,
      completed: t.completed,
    });
  };

  const updateTodo = async () => {
    if (selectedTodoId === null) return;

    try {
      await axios.put(`${HTTP_SERVER}/lab5/todos/${selectedTodoId}`, todo);
      setTodo({ title: "", description: "", completed: false });
      setSelectedTodoId(null);
      fetchTodos();
    } catch (error) {
      console.error(error);
      alert(`Unable to update Todo with ID: ${selectedTodoId}`);
    }
  };

  const testDelete1234 = async () => {
    try {
      await axios.delete(`${HTTP_SERVER}/lab5/todos/1234`);
      fetchTodos();
    } catch (error) {
      console.error(error);
      alert("Unable to delete Todo with ID: 1234");
    }
  };

  return (
    <div id="wd-working-with-arrays">
      <h3>Working With Arrays</h3>

      <h4>{selectedTodoId ? "Edit Todo" : "Create Todo"}</h4>
      <FormControl
        className="mb-2"
        placeholder="Title"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <FormControl
        className="mb-2"
        placeholder="Description"
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <div className="form-check mb-2">
        <input
          type="checkbox"
          className="form-check-input"
          checked={todo.completed}
          onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
        />
        <label className="form-check-label">Completed</label>
      </div>

      {selectedTodoId ? (
        <Button className="btn btn-warning me-2 mb-3" onClick={updateTodo}>
          Update Todo
        </Button>
      ) : (
        <Button className="btn btn-primary me-2 mb-3" onClick={createTodo}>
          Add Todo
        </Button>
      )}

      <Button className="btn btn-danger mb-3" onClick={testDelete1234}>
        Test Delete 1234
      </Button>

      <hr />

      <h4>Todo List</h4>
      <ul className="list-group">
        {todos.map((t) => (
          <li key={t.id} className="list-group-item">
            <b>{t.title}</b> - {t.description} (
            {t.completed ? "Completed" : "Not Completed"})
            <div className="float-end">
              <Button
                size="sm"
                className="btn btn-secondary me-2"
                onClick={() => loadTodoIntoEditor(t)}
              >
                Load
              </Button>
              <Button
                size="sm"
                className="btn btn-danger"
                onClick={() => deleteTodo(t.id)}
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}