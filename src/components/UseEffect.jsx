import { useState, useEffect } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect is uitgevoerd! Count is nu:", count);
  }, [count]); // useEffect wordt uitgevoerd wanneer count verandert

  return (
    <div>
        <h1>Voor useEffect</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Verhoog count</button>
    </div>
  );
}

export default UseEffect;
