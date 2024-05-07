import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      setToken: (accessToken) => set((state) => ({ ...state, accessToken })),
      setUser: (user) => set((state) => ({ ...state, user })),
      logout: () =>
        set((state) => ({ ...state, user: null, accessToken: null })),
    }),
    {
      name: "ACCESS_TOKEN",
      getStorage: () => localStorage,
      partialize: (state) => ({ accessToken: state.accessToken }),
    }
  )
);
