export default function GridLayout() {
  return (
    <div id="wd-css-grid-layout">
      <h2>Grid layout</h2>

      <div className="wd-grid-row">
        <div className="wd-grid-col-third-page wd-bg-color-yellow">One</div>
        <div className="wd-grid-col-third-page wd-bg-color-blue wd-fg-color-white">
          Two
        </div>
        <div className="wd-grid-col-third-page wd-bg-color-red">Three</div>
      </div>

      <div className="wd-grid-row">
        <div className="wd-grid-col-half-page wd-bg-color-green wd-fg-color-white">
          Four
        </div>
        <div className="wd-grid-col-half-page wd-bg-color-yellow">Five</div>
      </div>

      <div className="wd-grid-row">
        <div className="wd-grid-col-two-thirds-page wd-bg-color-blue wd-fg-color-white">
          Six
        </div>
        <div className="wd-grid-col-third-page wd-bg-color-red"> </div>
      </div>
    </div>
  );
}