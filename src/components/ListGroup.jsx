function ListGroup() {
  const items = [
    "Amsterdam",
    "Hoofddorp",
    "Haarlem",
    "Rotterdam",
    "Vijfhuizen",
  ];

  const getMessage = () => {
    return items.length === 0 ? <p>No items found</p> : null;
  };

  return (
    <>
      <h1>Hello Tyrell</h1>
      {/*One way of dong it
        Get's error in console*/}
      {getMessage()}
      {/*Anotherway of doing it*/}
      {items.length === 0 && <p>geen item gevonden</p>}

      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log("Hi")}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
