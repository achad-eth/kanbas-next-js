function summary({
  bedrooms,
  bathrooms,
}: {
  bedrooms: number;
  bathrooms: number;
}) {
  return `${bedrooms} bd / ${bathrooms} ba`;
}

export default function FunctionDestructing() {
  const house = { bedrooms: 4, bathrooms: 3 };

  return (
    <div id="wd-function-destructing">
      <h4>Function Destructing</h4>
      <div>{summary(house)}</div>
      <hr />
    </div>
  );
}