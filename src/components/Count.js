import React, { useState } from "react";

const Count = () => {
  const [number, setNumber] = useState(0);
  const [field, setField] = useState(100);
  const increment = () => {
    setNumber(number + field);
  };
  const decrement = () => {
    setNumber(number - field);
  };
  return (
    <div className="mt-96 mb-10">
      <p data-testid="title">Count</p>
      <p
        data-testid="number"
        className={`${
          number > 0
            ? "text-[green]"
            : number < 0
            ? "text-[red]"
            : "text-[white]"
        } `}
      >
        {number}
      </p>
      <div className="">
        <button
          id="decrement"
          className="text-2xl px-5"
          onClick={decrement}
          data-testid="decrement"
        >
          -
        </button>
        <input
          id="field"
          name="field"
          data-testid="field"
          type="number"
          className="md:w-4/12 bg-transparent border-2 mx-2 rounded text-center"
          value={field}
          onChange={(e) => {
            setField(parseInt(e.target.value));
          }}
        />
        <button
          id="increment"
          className="text-2xl px-5"
          onClick={increment}
          data-testid="increment"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Count;
