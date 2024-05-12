import { api } from "../config/ky";

export const facultyService = {
  getFaculties: async () => {
    const response = await api.get("faculties");

    if (!response.ok) {
      throw new Error("Failed to get faculties");
    }

    return response.json();
  },
  getFacultyById: async (id) => {
    const response = await api.get(`faculties/${id}`);

    if (!response.ok) {
      throw new Error("Failed to get faculty by id");
    }

    return response.json();
  },
};
