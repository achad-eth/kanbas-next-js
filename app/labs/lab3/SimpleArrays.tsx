export default function SimpleArrays() {
  const numbers = [1, 2, 3, 4];

  return (
    <div id="wd-simple-arrays">
      <h4>Simple Arrays</h4>
      <div>{numbers.join(", ")}</div>
      <hr />
    </div>
  );
}