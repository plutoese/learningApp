"use client";

import { create } from "zustand";

const useCounter = create((set) => {
  return {
    counter: 0,
    incrCounter: () => set((state) => ({ counter: state.counter + 1 })),
  };
});

const DisplayCounter = () => {
  const counter = useCounter((state) => state.counter);
  return <div>Counter: {counter}</div>;
};

const CounterControl = () => {
  const incrCounter = useCounter((state) => state.incrCounter);

  return (
    <div>
      <button onClick={incrCounter}>Incr. Counter</button>
    </div>
  );
};

const App = () => {
  return (
    <>
      <DisplayCounter />
      <CounterControl />
    </>
  );
};

export default App;
