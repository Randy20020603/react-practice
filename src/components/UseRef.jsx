import React, { useRef } from 'react';

function UseRef() {
  const renderCount = useRef(0); // Deze waarde blijft tussen renders

  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  const handleChange = () => {
    renderCount.current += 1; // Verhoog de waarde
    console.log('Aantal renders:', renderCount.current);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p>Aantal keren gewijzigd(blijft 0 want pagina wordt niet re-renderd): {renderCount.current}</p>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default UseRef;