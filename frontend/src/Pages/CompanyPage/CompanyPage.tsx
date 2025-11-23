import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../api";

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

  return (
    <>
      {company ? (
        <div>{company.companyName}</div>
      ) : (
        <div>Company not found!</div>
      )}
    </>
  );
};

export default CompanyPage;
