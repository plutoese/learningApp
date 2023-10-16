"use client";

import useCounterStore from "./store";

const Counter = () => {
  const counterNumber = useCounterStore((state) => state.number);
  const increaseNumber = useCounterStore(
    (state) => state.increaseCounterNumber
  );
  const decreasenumber = useCounterStore(
    (state) => state.decreaseCounterNumber
  );

  return (
    <div className="m-5 gap-x-5">
      <button
        className="text-white bg-blue-600 px-3 py-2 rounded-lg"
        onClick={increaseNumber}
      >
        +
      </button>
      <div className="pt-2">{counterNumber}</div>
      <button
        className="text-white bg-blue-600 px-3 py-2 rounded-lg"
        onClick={decreasenumber}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
