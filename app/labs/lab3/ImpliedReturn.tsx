export default function ImpliedReturn() {
  const subtract = (a: number, b: number) => a - b;

  return (
    <div id="wd-implied-return">
      <h4>Implied Return</h4>
      <div>5 - 2 = {subtract(5, 2)}</div>
      <hr />
    </div>
  );
}