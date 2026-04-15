import { create } from "zustand";

export const useStore = create((set) => ({
  activeSection: "home",
  cursorVariant: "default",
  mobileMenuOpen: false,
  setActiveSection: (activeSection) => set({ activeSection }),
  setCursorVariant: (cursorVariant) => set({ cursorVariant }),
  toggleMobileMenu: () =>
    set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
  closeMobileMenu: () => set({ mobileMenuOpen: false }),
}));
