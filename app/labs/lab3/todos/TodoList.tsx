import todos from "./todos.json";
import TodoItem from "./TodoItem";

export default function TodoList() {
  return (
    <div id="wd-todo-list">
      <h4>Todo List</h4>
      <ul>
        {todos.map((t) => (
          <TodoItem key={t.id} todo={t} />
        ))}
      </ul>
      <hr />
    </div>
  );
}