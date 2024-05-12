import { jwtDecode } from "jwt-decode";

export const getUserIdFromToken = (accessToken) =>
  jwtDecode(accessToken).UserId;
