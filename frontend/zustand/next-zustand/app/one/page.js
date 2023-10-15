"use client";

import { create } from "zustand";

const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

function Counter() {
  const { count, inc } = useStore();
  return (
    <div className="m-5 flex space-x-3">
      <span>{count}</span>
      <button
        className="text-white rounded-lg bg-blue-600 px-3 py-2"
        onClick={inc}
      >
        one up
      </button>
    </div>
  );
}

export default Counter;
