export default function IfElse() {
  let x = 1;
  let y = 2;
  let z = 0;

  if (x < y) {
    z = y - x;
  } else {
    z = x - y;
  }

  return (
    <div id="wd-if-else">
      <h4>If Else</h4>
      <div>
        x = {x}, y = {y}, z = {z}
      </div>
      <hr />
    </div>
  );
}