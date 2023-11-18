import { create } from "zustand";

const pageStore = create((set, get) => ({
    itemOffset: 0,
    forcePageNum: 0,
    setItemOffset: (offsets) => set((state) => ({ itemOffset: offsets })),
    setForcePageNum: (num) => set((state) => ({ forcePageNum: num }))
  }));
  
  export default pageStore;