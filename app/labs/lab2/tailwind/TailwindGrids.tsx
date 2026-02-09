export default function TailwindGrids() {
  return (
    <div>
      <h2>Tailwind Grids</h2>

      <div>
        <h3 className="mt-6 text-3xl font-bold">4 Columns Grid</h3>
        <div className="grid grid-cols-4 gap-4">
          {["01","02","03","04","05","06","07","08","09"].map((x) => (
            <div key={x} className="text-center bg-blue-300 p-3">{x}</div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mt-6 text-3xl font-bold">3 Columns Grid</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center bg-blue-300 p-3">01</div>
          <div className="text-center bg-blue-300 p-3">02</div>
          <div className="text-center bg-blue-300 p-3">03</div>
          <div className="col-span-2 text-center bg-blue-300 p-3">04</div>
          <div className="text-center bg-blue-300 p-3">05</div>
          <div className="text-center bg-blue-300 p-3">06</div>
          <div className="col-span-2 text-center bg-blue-300 p-3">07</div>
        </div>
      </div>
    </div>
  );
}