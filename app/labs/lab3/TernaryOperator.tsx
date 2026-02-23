export default function TernaryOperator() {
  let x = 1;
  let y = 2;
  const z = x < y ? y - x : x - y;

  return (
    <div id="wd-ternary-operator">
      <h4>Ternary Operator</h4>
      <div>
        x = {x}, y = {y}, z = {z}
      </div>
      <hr />
    </div>
  );
}