export default function ForLoops() {
  const numbers = [1, 2, 3, 4];
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return (
    <div id="wd-for-loops">
      <h4>For Loops</h4>
      <div>Numbers: {numbers.join(", ")}</div>
      <div>Sum: {sum}</div>
      <hr />
    </div>
  );
}