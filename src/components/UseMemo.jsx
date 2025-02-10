import React, { useState, useMemo } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);

  // Gebruik useMemo om de berekening alleen opnieuw te doen als count verandert
  const calculation = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]); // Alleen opnieuw berekenen als 'count' verandert

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Calculation: {calculation}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default UseMemo;

