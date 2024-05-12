import { api } from "../config/ky";

const applicationService = {
  addApplication: async (application, userId) => {
    return api.post(`applications/users/${userId}`, { json: application });
  },
};

export default applicationService;
