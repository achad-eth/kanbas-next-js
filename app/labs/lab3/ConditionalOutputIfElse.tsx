export default function ConditionalOutputIfElse() {
  const loggedIn = false;

  let content;
  if (loggedIn) {
    content = <h5>Welcome</h5>;
  } else {
    content = <h5>Please login</h5>;
  }

  return (
    <div id="wd-conditional-output-if-else">
      <h4>Conditional Output If Else</h4>
      {content}
      <hr />
    </div>
  );
}