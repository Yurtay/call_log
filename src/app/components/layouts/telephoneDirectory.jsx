import React from "react";
import TelephoneMenu from "../telephone/telephoneMenu";
import TelephoneTable from "../telephone/telephoneTable";

const TelephoneDirectory = () => {
  return (
    <>
      <div className="d-flex">
        <div className="d-flex flex-column flex-shrink-0 p-3">
          <TelephoneMenu />
        </div>
        <div className="d-flex flex-column p-3">
          <div className="d-flex justify-content-center">
            <TelephoneTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default TelephoneDirectory;
