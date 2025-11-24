import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import { createBrowserRouter } from "react-router-dom";
import SearchPage from "../Pages/SearchPage/SearchPage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile";
import IncomeStatement from "../Components/IncomeStatement/IncomeStatement";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "", element: <HomePage></HomePage> },
      { path: "search", element: <SearchPage></SearchPage> },
      {
        path: "company/:ticker",
        element: <CompanyPage></CompanyPage>,
        children: [
          {
            path: "company-profile",
            element: <CompanyProfile></CompanyProfile>,
          },
          {
            path: "income-statement",
            element: <IncomeStatement></IncomeStatement>,
          },
        ],
      },
    ],
  },
]);
