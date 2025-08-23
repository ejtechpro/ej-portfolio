import { create } from "zustand";

const useSidebar = create((set) => ({
  isOpen: window.innerWidth >= 1024,
  toggleSidebar: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),
}));

export default useSidebar;
