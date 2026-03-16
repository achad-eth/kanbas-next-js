"use client";

export default function EventObject() {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    alert(`You clicked button with id: ${event.currentTarget.id}`);
  };

  return (
    <div id="wd-event-object">
      <h2>Event Object</h2>
      <button
        id="wd-event-object-click"
        onClick={handleClick}
        className="btn btn-primary"
      >
        Click me
      </button>
      <hr />
    </div>
  );
}