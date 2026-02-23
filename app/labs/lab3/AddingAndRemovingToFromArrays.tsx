export default function AddingAndRemovingToFromArrays() {
  const numbers = [1, 2, 3];
  const addedFront = [0, ...numbers];
  const addedBack = [...numbers, 4];
  const removedFront = numbers.slice(1);
  const removedBack = numbers.slice(0, numbers.length - 1);

  return (
    <div id="wd-adding-removing-arrays">
      <h4>Adding and Removing To From Arrays</h4>
      <div>Original: {numbers.join(", ")}</div>
      <div>Add front: {addedFront.join(", ")}</div>
      <div>Add back: {addedBack.join(", ")}</div>
      <div>Remove front: {removedFront.join(", ")}</div>
      <div>Remove back: {removedBack.join(", ")}</div>
      <hr />
    </div>
  );
}