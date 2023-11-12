import { create } from "zustand";

type UiState = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (v: boolean) => void;
};

const useUiStore = create<UiState>((set) => ({
  isSidebarOpen: true,
  setIsSidebarOpen: (v) =>
    set(() => {
      console.log(`setIsSidebarOpen, v=${v}`);
      return { isSidebarOpen: v };
    }),
}));

export default useUiStore;
