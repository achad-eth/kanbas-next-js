export default function MapFunction() {
  const numbers = [1, 2, 3, 4];
  const squares = numbers.map((n) => n * n);

  return (
    <div id="wd-map-function">
      <h4>Map Function</h4>
      <div>Numbers: {numbers.join(", ")}</div>
      <div>Squares: {squares.join(", ")}</div>
      <hr />
    </div>
  );
}