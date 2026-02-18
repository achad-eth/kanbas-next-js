export default function Float() {
  return (
    <div id="wd-css-float">
      <h2>Floating Images</h2>

      <div>
        <div className="wd-float-left wd-bg-color-yellow wd-dimension-square">
          Left
        </div>
        <div className="wd-float-left wd-bg-color-blue wd-fg-color-white wd-dimension-square">
          Middle
        </div>
        <div className="wd-float-left wd-bg-color-red wd-dimension-square">
          Right
        </div>

        <div className="wd-float-done"></div>
      </div>
    </div>
  );
}