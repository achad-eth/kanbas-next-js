export default function Square({ children }: { children: React.ReactNode }) {
  const n = Number(children);

  return (
    <div id="wd-square">
      <h4>Square</h4>
      <div>
        {n} squared = {n * n}
      </div>
      <hr />
    </div>
  );
}