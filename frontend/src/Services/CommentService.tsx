import apiClient from "./ApiClientService";
import { CommentGet, CommentPost } from "../Models/Comment";
import { handleError } from "../Helpers/ErrorHandler";

const api = "http://localhost:5265/api/comment/";

export const commentPostAPI = async (
  title: string,
  content: string,
  symbol: string
) => {
  try {
    const data = await apiClient.post<CommentPost>(api + `${symbol}`, {
      title: title,
      content: content,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const commentGetAPI = async (symbol: string) => {
  try {
    const data = await apiClient.get<CommentGet[]>(api + `?Symbol=${symbol}`);
    return data;
  } catch (error) {
    handleError(error);
  }
};
