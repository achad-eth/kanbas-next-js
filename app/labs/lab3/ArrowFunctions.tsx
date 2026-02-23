export default function ArrowFunctions() {
  const add = (a: number, b: number) => a + b;

  return (
    <div id="wd-arrow-functions">
      <h4>Arrow Functions</h4>
      <div>2 + 3 = {add(2, 3)}</div>
      <hr />
    </div>
  );
}