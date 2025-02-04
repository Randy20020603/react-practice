function ListGroup() {
  const items = [];

  const getMessage = () => {
    return items.length === 0 ? <p>No items found</p> : null;
  };

  return (
    <>
      <h1>Hello Tyrell</h1>
      {/*One way of dong it*/}
      {getMessage()}
      {/*Anotherway of doing it*/}
      {items.length === 0 && <p>geen item gevonden</p>}

      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
