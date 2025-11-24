import React from "react";
import { Outlet } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const CompanyDashboard = ({ children }: Props) => {
  return (
    <div className="relative md:ml-64 bg-blueGray-100 w-full">
      <div className="relative pt-20 pb-32 bg-lightBlue-500">
        <div className="px-4 md:px-6 mx-auto w-full">
          <div>
            <div className="flex flex-wrap">{children}</div>
            {/* Outlet is where company profile/income statement ect will render, under the tiles*/}
            <div className="flex flex-wrap">{<Outlet></Outlet>}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
