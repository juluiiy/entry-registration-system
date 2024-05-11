import { create } from "zustand";

export const useCreateApplicationStore = create((set) => ({
  application: {
    specialty: null,
    nmtResults: [],
    motivationLetter: "",
  },
  nmtError: null,
  setMotivationLetter: (motivationLetter) =>
    set((state) => ({
      application: { ...state.application, motivationLetter },
    })),
  setSpecialty: (specialty) =>
    set((state) => ({ application: { ...state.application, specialty } })),
  setNmtResults: (nmtResults) => {
    if (nmtResults.length <= 3) {
      set((state) => ({
        application: { ...state.application, nmtResults },
        nmtError: null,
      }));
    } else {
      set(() => ({
        nmtError: "Не можна вибрати більше 3 предметів",
      }));
    }
  },
}));
