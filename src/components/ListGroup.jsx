import { useState } from "react";

function ListGroup() {
  const items = [
    "Amsterdam",
    "Hoofddorp",
    "Haarlem",
    "Rotterdam",
    "Vijfhuizen",
  ];

  /* Hook
  useState is een hook die je gebruikt om state toe te voegen aan je functionele componenten.
  Het retourneert een array met twee waarden: de state zelf en een functie om de state bij te werken.
  Wanneer je de state bijwerkt, wordt de component opnieuw gerenderd met de nieuwe state-waarde,
   waardoor je dynamische en interactieve toepassingen kunt bouwen.
  */
  const [selectedItem, setSelectedItem] = useState(-1);

  const getMessage = () => {
    return items.length === 0 ? <p>No items found</p> : null;
  };

  // Event handler
  const handleClick = (event) => console.log("hi");

  return (
    <>
      <h1>Hello Tyrell</h1>
      {/* One way of dong it
        Get's error in console */}
      {getMessage()}
      {/* Anotherway of doing it:
        if the left side is true, then render the right side
      */}
      {items.length === 0 && <p>geen item gevonden</p>}

      <ul className="list-group">
        {/* The second parameter will automaticly become the index*/}
        {items.map((item, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedItem(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
