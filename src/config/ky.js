import ky from "ky";

export const api = ky.create({
  prefixUrl: process.env.REACT_APP_API_UR || "http://localhost:8000",
  credentials: "include",
  hooks: {
    beforeRequest: [
      (request) =>
        request.headers.set(
          "Authorization",
          `Bearer ${localStorage.getItem(LocalStorageKey.ACCESS_TOKEN)}`
        ),
    ],
  },
});
