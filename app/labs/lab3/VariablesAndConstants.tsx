export default function VariablesAndConstants() {
  let a = 1;
  let b = 2;
  const c = a + b;

  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      <p>a = {a}</p>
      <p>b = {b}</p>
      <p>c = a + b = {c}</p>
      <hr />
    </div>
  );
}