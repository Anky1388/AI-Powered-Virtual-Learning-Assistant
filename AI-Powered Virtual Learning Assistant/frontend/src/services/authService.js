import API from "./api";

export const registerUser = (data) => {
  return API.post("/auth/register", data);
};

export const loginUser = (data) => {
  return API.post("/auth/login", data);
};

export const forgotPassword = (data) => {
  return API.post("/auth/forgot-password", data);
};
