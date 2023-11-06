import { create } from "zustand";

type UiState = {
  isOpenOnSmallScreens: boolean;
  isPageWithSidebar: boolean;
  setOpenOnSmallScreens: (v: boolean) => void;
};

const useUiStore = create<UiState>((set) => ({
  isOpenOnSmallScreens: false,
  isPageWithSidebar: false,
  setOpenOnSmallScreens: (v) => set(() => ({ isOpenOnSmallScreens: v })),
}));

export default useUiStore;
