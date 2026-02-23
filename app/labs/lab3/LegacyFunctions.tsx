export default function LegacyFunctions() {
  function add(a: number, b: number) {
    return a + b;
  }

  return (
    <div id="wd-legacy-functions">
      <h4>Legacy Functions</h4>
      <div>2 + 3 = {add(2, 3)}</div>
      <hr />
    </div>
  );
}