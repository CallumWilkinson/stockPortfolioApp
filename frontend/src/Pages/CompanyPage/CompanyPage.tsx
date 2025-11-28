import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../api";
import Sidebar from "../../Components/Sidebar/Sidebar";
import CompanyDashboard from "../../Components/CompanyDashboard/CompanyDashboard";
import Tile from "../../Components/Tile/Tile";
import Spinner from "../../Components/Spinner/Spinner";
import ComparableFinder from "../../Components/ComparableFinder/ComparableFinder";

interface Props {}

const CompanyPage = (props: Props) => {
  //get the ticker from the URL, this is a react router thing
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    if (!ticker) {
      return;
    }

    const getProfileInit = async () => {
      try {
        const result = await getCompanyProfile(ticker!);
        console.log("result: ", result);
        setCompany(result?.data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    getProfileInit();
  }, [ticker]);

  if (!company) {
    return <Spinner></Spinner>;
  }
  return (
    <>
      {company ? (
        <div className="w-full px-4 mt-6">
          <Sidebar></Sidebar>
          <CompanyDashboard ticker={ticker!}>
            <Tile title="Company Name" subTitle={company.companyName} />
            <Tile title="Price" subTitle={"$" + company.price.toString()} />
            <Tile title="Sector" subTitle={company.sector} />
            <Tile title="Beta" subTitle={company.beta.toString()} />

            <div className="w-full px-4 mt-8">
              <section className="w-full bg-white border border-blueGray-100 rounded-2xl shadow-xl p-6">
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-semibold text-blueGray-900">
                    Comparable Companies
                  </h2>

                  <div className="w-full">
                    <ComparableFinder
                      ticker={company.symbol}
                      className="w-full"
                    />
                  </div>
                </div>
              </section>
            </div>

            <div className="w-full px-4 mt-6">
              <article className="bg-white shadow rounded text-medium text-gray-900 p-3 mt-1">
                {company.description}
              </article>
            </div>
          </CompanyDashboard>
        </div>
      ) : (
        <Spinner></Spinner>
      )}
    </>
  );
};

export default CompanyPage;
