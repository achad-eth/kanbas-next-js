export default function FindIndex() {
  const numbers = [1, 2, 3, 4];
  const index = numbers.findIndex((n) => n === 3);

  return (
    <div id="wd-find-index">
      <h4>Find Index Function</h4>
      <div>Index of 3: {index}</div>
      <hr />
    </div>
  );
}