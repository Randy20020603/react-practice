import React, { useState } from "react";

const ChildComponent = React.memo(({ name }) => {
  console.log("Child component rendered!");
  return <p>Hello, {name}!</p>;
});

function ParentComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <ChildComponent name="Alice" />
    </div>
  );
}

export default ParentComponent;
    