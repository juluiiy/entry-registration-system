import ky from "ky";

export const api = ky.create({
  prefixUrl: process.env.REACT_APP_API_URL,
  hooks: {
    beforeRequest: [
      (request) =>
        request.headers.set(
          "Authorization",
          `Bearer ${
            JSON.parse(localStorage.getItem("ACCESS_TOKEN")).state.accessToken
          }`
        ),
    ],
  },
});
