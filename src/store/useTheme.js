import { create } from "zustand";
import { persist } from "zustand/middleware";


const VALID_THEME = ["dark", "light"];

const useTheme = create(
  persist(
    (set) => ({
      theme: "light",

      toggleTheme: (payload) => {
        const html = document.documentElement;

        if (payload === "dark" && !html.classList.contains("dark")) {
          html.classList.add("dark");
          set({ theme: payload });
        }

        if (payload === "light") {
          set({ theme: payload });

          if (html.classList.contains("dark")) {
            html.classList.remove("dark");
          }
        }
      },
    }),
    {
      name: "theme",
      partialize: (state) => ({ theme: state.theme }),

      migrate: (persistedState, version) => {
        if (!VALID_THEME.includes(persistedState?.theme)) {
          return { theme: "light" }; 
        }
        return persistedState;
      },
    },
  ),
);

export default useTheme;
