export default function Zindex() {
  return (
    <div id="wd-css-zindex">
      <h2>Z index</h2>

      <div className="wd-pos-relative" style={{ height: 150 }}>
        <div className="wd-bg-color-yellow wd-dimension-portrait wd-pos-absolute-10-10">
          Portrait
        </div>

        <div className="wd-bg-color-red wd-dimension-square wd-pos-absolute-120-20">
          Square
        </div>

        <div className="wd-bg-color-blue wd-fg-color-white wd-dimension-landscape wd-pos-absolute-50-50 wd-zindex-bring-to-front">
          Landscape
        </div>
      </div>
    </div>
  );
}