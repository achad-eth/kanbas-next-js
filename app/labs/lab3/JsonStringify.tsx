export default function JsonStringify() {
  const house = { bedrooms: 2, bathrooms: 1, address: { city: "Boston" } };

  return (
    <div id="wd-json-stringify">
      <h4>JSON Stringify</h4>
      <pre>{JSON.stringify(house, null, 2)}</pre>
      <hr />
    </div>
  );
}