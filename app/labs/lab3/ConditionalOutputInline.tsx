export default function ConditionalOutputInline() {
  const loggedIn = true;

  return (
    <div id="wd-conditional-output-inline">
      <h4>Conditional Output Inline</h4>

      {loggedIn && <h5>Welcome</h5>}
      {!loggedIn && <h5>Please login</h5>}

      <hr />
    </div>
  );
}