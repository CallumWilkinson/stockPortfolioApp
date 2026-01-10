import { handleError } from "../Helpers/ErrorHandler";
import { UserProfileToken } from "../Models/User";
import apiClient from "./ApiClientService";

const api = "http://localhost:5265/api/";

export const loginAPI = async (username: string, password: string) => {
  try {
    const data = await apiClient.post<UserProfileToken>(api + "account/login", {
      username: username,
      password: password,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const registerAPI = async (
  email: string,
  username: string,
  password: string
) => {
  try {
    const data = await apiClient.post<UserProfileToken>(
      api + "account/register",
      {
        EmailAddress: email,
        username: username,
        password: password,
      }
    );
    return data;
  } catch (error) {
    handleError(error);
  }
};
