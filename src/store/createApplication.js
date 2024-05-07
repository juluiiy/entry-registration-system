import { create } from "zustand";

export const useCreateApplicationStore = create((set) => ({
  application: {
    speciality: null,
    nmtResults: [],
    motivationLetter: "",
    status: "not applied",
  },
  nmtError: null,
  setMotivationLetter: (motivationLetter) =>
    set((state) => ({
      application: { ...state.application, motivationLetter },
    })),
  setSpeciality: (speciality) =>
    set((state) => ({ application: { ...state.application, speciality } })),
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
