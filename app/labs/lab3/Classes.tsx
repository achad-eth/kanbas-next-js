import "./Classes.css";

export default function Classes() {
  const dangerous = true;

  return (
    <div id="wd-classes">
      <h4>Working with HTML classes</h4>

      <div className="wd-danger">Red Dangerous background</div>

      <div className={dangerous ? "wd-blue" : "wd-safe"}>
        Blue Dynamic blue background
      </div>

      <hr />
    </div>
  );
}