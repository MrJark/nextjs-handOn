import { create } from 'zustand'

interface Starte {
  isSideMenuOpen: boolean,
  openSideMenu: () => void,
  closeSideMenu: () => void,
}

export const useUIStore = create<Starte>()( ( set ) => ( {
  isSideMenuOpen: false,

  openSideMenu: () => set({ isSideMenuOpen: true }),
  closeSideMenu: () => set({ isSideMenuOpen: false }),
} ) )