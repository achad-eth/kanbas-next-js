export default function NotImplemented({
  title,
}: {
  title: string;
}) {
  return (
    <div className="p-4">
      <h3>{title}</h3>
      <p>This page is not implemented yet.</p>
    </div>
  );
}