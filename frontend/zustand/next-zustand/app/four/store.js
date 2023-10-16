import { create } from "zustand";

const useCounterStore = create((set, get) => ({
  number: 123,
  increaseCounterNumber: () =>
    set((state) => ({
      number: state.number + 1,
    })),
  decreaseCounterNumber: () => set((state) => ({ number: state.number - 1 })),
  logNumber: () => {
    console.log(`Current number value equals ${get().number}`);
  },
}));

export default useCounterStore;
