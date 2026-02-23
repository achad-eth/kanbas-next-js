export default function FindFunction() {
  const numbers = [1, 2, 3, 4];
  const firstGreaterThan2 = numbers.find((n) => n > 2);

  return (
    <div id="wd-find-function">
      <h4>Find Function</h4>
      <div>First number &gt; 2: {firstGreaterThan2}</div>
      <hr />
    </div>
  );
}