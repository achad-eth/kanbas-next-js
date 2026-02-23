export default function House() {
  const house = {
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2100,
    address: { street: "123 Main St", city: "Boston", state: "MA" },
  };

  console.log(house);

  return (
    <div id="wd-house">
      <h4>House</h4>
      <pre>{JSON.stringify(house, null, 2)}</pre>
      <hr />
    </div>
  );
}