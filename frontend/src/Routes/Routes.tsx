import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import { createBrowserRouter } from "react-router-dom";
import SearchPage from "../Pages/SearchPage/SearchPage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "", element: <HomePage></HomePage> },
      { path: "search", element: <SearchPage></SearchPage> },
      { path: "company/:ticker", element: <CompanyPage></CompanyPage> },
    ],
  },
]);
