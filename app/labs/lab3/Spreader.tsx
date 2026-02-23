export default function Spreader() {
  const a = [1, 2, 3];
  const b = [0, ...a, 4];

  const obj = { a: 1, b: 2 };
  const obj2 = { ...obj, c: 3 };

  return (
    <div id="wd-spreader">
      <h4>Spread Operator</h4>
      <div>a: {a.join(", ")}</div>
      <div>b: {b.join(", ")}</div>
      <pre>{JSON.stringify(obj2, null, 2)}</pre>
      <hr />
    </div>
  );
}