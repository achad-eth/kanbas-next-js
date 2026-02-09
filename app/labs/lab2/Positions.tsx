export default function Positions() {
  return (
    <div id="wd-css-positions">
      <h2>Positions</h2>

      <h3>Relative position</h3>
      <div className="wd-pos-relative wd-bg-color-gray" style={{ height: 200 }}>
        <div className="wd-bg-color-yellow wd-dimension-portrait wd-pos-relative-nudge-down-right">
          Yellow (relative) <br /> nudge down and right
        </div>

        <div className="wd-bg-color-blue wd-fg-color-white wd-dimension-landscape wd-pos-relative-nudge-up-right">
          Blue (relative) moved up and right a bit
        </div>
      </div>

      <h3>Absolute position</h3>
      <div className="wd-pos-relative wd-bg-color-gray" style={{ height: 200 }}>
        <div className="wd-bg-color-yellow wd-dimension-portrait wd-pos-absolute-10-10">
          Portrait
        </div>
        <div className="wd-bg-color-blue wd-fg-color-white wd-dimension-landscape wd-pos-absolute-50-50">
          Landscape
        </div>
        <div className="wd-bg-color-red wd-dimension-square wd-pos-absolute-120-20">
          Square
        </div>
      </div>

      <h3>Fixed position</h3>
      <div className="wd-pos-fixed wd-bg-color-blue wd-fg-color-white" style={{ padding: 10 }}>
        Fixed position
      </div>

      <p>
        Checkout the blue square that says &quot;Fixed position&quot; stuck all the
        way on the right and half way down the page. It doesn&apos;t scroll with
        the rest of the page. Its position is &quot;Fixed&quot;.
      </p>
    </div>
  );
}