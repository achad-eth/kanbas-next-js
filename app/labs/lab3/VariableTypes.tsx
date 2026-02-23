export default function VariableTypes() {
  let numberVariable = 123;
  let stringVariable = "hello";
  let booleanVariable = true;
  let objectVariable = { a: 1, b: 2 };
  let arrayVariable = [1, 2, 3];

  return (
    <div id="wd-variable-types">
      <h4>Variable Types</h4>
      <p>Number: {numberVariable}</p>
      <p>String: {stringVariable}</p>
      <p>Boolean: {booleanVariable.toString()}</p>
      <p>Object a: {objectVariable.a}</p>
      <p>Array length: {arrayVariable.length}</p>
      <hr />
    </div>
  );
}