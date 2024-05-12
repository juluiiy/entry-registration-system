import { api } from "../config/ky";

export const userService = {
  getUserById: async (id) => {
    const response = await api.get(`users/${id}`);

    if (!response.ok) {
      throw new Error("Failed to get user by id");
    }

    return response.json();
  },
  addNmtResults: async (id, results) => {
    const response = await api.post(`users/${id}/nmt-results`, {
      json: results,
    });

    if (!response.ok) {
      throw new Error("Failed to add NMT results");
    }

    return response.json();
  },
};
