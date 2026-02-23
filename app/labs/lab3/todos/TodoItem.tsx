export default function TodoItem({
  todo,
}: {
  todo: { id: number; title: string; completed: boolean };
}) {
  return (
    <li>
      <input type="checkbox" checked={todo.completed} readOnly /> {todo.title}
    </li>
  );
}