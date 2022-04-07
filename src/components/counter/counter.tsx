import React, { useState } from "react";

export interface Props {
  description: string;
  defaultCount: number;
}

export const Counter = ({ description, defaultCount }: Props) => {
  const [count, setCount] = useState(defaultCount);
  const [incrementor, setIncrementor] = useState(1);

  return (
    <div>
      <h2>
        DESC: {description} - DC: {defaultCount}
      </h2>
      <label>
        Incrementor:
        <input
          aria-label="inc"
          value={incrementor}
          onChange={(evt) => {
            setIncrementor(parseInt(evt.target.value));
          }}
          type="number"
        />
      </label>
      <button
        aria-label="Subtract"
        onClick={() => setCount(count - incrementor)}
      >
        -
      </button>
      Current Count: {count}
      <button aria-label="Add" onClick={() => setCount(count + incrementor)}>
        +
      </button>
    </div>
  );
};
