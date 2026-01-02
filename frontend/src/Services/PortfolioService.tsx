import apiClient from "./ApiClientService";
import { PortfolioGet, PortfolioPost } from "../Models/Portfolio";
import { handleError } from "../Helpers/ErrorHandler";

const api = "http://localhost:5265/api/portfolio";

export const portfolioAddAPI = async (symbol: string) => {
  try {
    const data = await apiClient.post<PortfolioPost>(api + `?symbol=${symbol}`);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const portfolioDeleteAPI = async (symbol: string) => {
  try {
    const data = await apiClient.delete<PortfolioPost>(
      api + `?symbol=${symbol}`
    );
    return data;
  } catch (error) {
    handleError(error);
  }
};

//get all
export const portfolioGetAPI = async () => {
  try {
    const data = await apiClient.get<PortfolioGet[]>(api);
    return data;
  } catch (error) {
    handleError(error);
  }
};
