import { create } from "zustand";

export const useCreateApplicationStore = create((set) => ({
  application: {
    specialtyId: null,
    nmtResults: [],
    motivationLetter: "",
  },
  nmtError: null,
  setMotivationLetter: (motivationLetter) =>
    set((state) => ({
      application: { ...state.application, motivationLetter },
    })),
  setSpecialty: (specialtyId) =>
    set((state) => ({ application: { ...state.application, specialtyId } })),
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
