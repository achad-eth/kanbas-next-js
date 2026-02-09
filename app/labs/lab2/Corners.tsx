export default function Corners() {
  return (
    <div id="wd-css-corners">
      <h2>Rounded corners</h2>

      <div className="wd-border-thin wd-border-solid wd-border-blue wd-rounded-corners-top wd-padding-fat">
        Rounded corners on the top
      </div>

      <div className="wd-border-thin wd-border-solid wd-border-blue wd-rounded-corners-bottom wd-padding-fat">
        Rounded corners at the bottom
      </div>

      <div className="wd-border-thin wd-border-solid wd-border-blue wd-rounded-corners-all-around wd-padding-fat">
        Rounded corners all around
      </div>

      <div className="wd-border-thin wd-border-solid wd-border-blue wd-rounded-corners-inline wd-padding-fat">
        Different rounded corners
      </div>
    </div>
  );
}