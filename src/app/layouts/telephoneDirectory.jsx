import React from "react";
import TelephoneMenu from "../components/ui/telephone/telephoneMenu";
import TelephoneTable from "../components/ui/telephone/telephoneTable";
import { useParams } from "react-router-dom";
import UserPage from "../components/ui/telephone/userPage/userPage";
import UserPageEdit from "../components/ui/telephone/userPage/userPageEdit";
import UserProvider from "../hooks/useUser";
import CallProvider from "../hooks/useCall";

const TelephoneDirectory = () => {
  const params = useParams();
  const { userId, edit } = params;

  return (
    <>
      <UserProvider>
        {userId ? (
          edit ? (
            <UserPageEdit userId={userId} />
          ) : (
            <CallProvider>
              <UserPage userId={userId} />
            </CallProvider>
          )
        ) : (
          <div className="d-flex">
            <div className="d-flex flex-column flex-shrink-0 p-3 mt-1 shadow">
              <TelephoneMenu />
            </div>
            <div className="d-flex flex-column p-3">
              <div className="d-flex justify-content-center">
                <TelephoneTable />
              </div>
            </div>
          </div>
        )}
      </UserProvider>
    </>
  );
};

export default TelephoneDirectory;
