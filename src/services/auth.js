import ky from "ky";

export const authService = {
  signUp: (credentials) => {
    return ky.post(`${process.env.REACT_APP_API_URL}auth/signup`, {
      json: credentials,
    });
  },
  signIn: async (credentials) => {
    const response = await ky.post(
      `${process.env.REACT_APP_API_URL}auth/signin`,
      {
        json: credentials,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to sign in");
    }
    const data = await response.json();

    const accessToken = data.accessToken;

    if (!accessToken) {
      throw new Error("Access token not found in response");
    }

    return accessToken;
  },
};
