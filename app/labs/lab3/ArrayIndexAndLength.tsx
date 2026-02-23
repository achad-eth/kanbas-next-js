export default function ArrayIndexAndLength() {
  const numbers = [10, 20, 30, 40];

  return (
    <div id="wd-array-index-and-length">
      <h4>Array Index and Length</h4>
      <div>First: {numbers[0]}</div>
      <div>Last: {numbers[numbers.length - 1]}</div>
      <div>Length: {numbers.length}</div>
      <hr />
    </div>
  );
}