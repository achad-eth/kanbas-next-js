export default function TemplateLiterals() {
  const firstName = "Aryn";
  const lastName = "Chadha";
  const fullName = `${firstName} ${lastName}`;

  return (
    <div id="wd-template-literals">
      <h4>Template Literals</h4>
      <div>{fullName}</div>
      <hr />
    </div>
  );
}