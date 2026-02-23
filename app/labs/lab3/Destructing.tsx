export default function Destructing() {
  const house = { bedrooms: 4, bathrooms: 3, address: { city: "Boston" } };
  const { bedrooms, bathrooms, address } = house;
  const { city } = address;

  return (
    <div id="wd-destructing">
      <h4>Destructing</h4>
      <div>Bedrooms: {bedrooms}</div>
      <div>Bathrooms: {bathrooms}</div>
      <div>City: {city}</div>
      <hr />
    </div>
  );
}