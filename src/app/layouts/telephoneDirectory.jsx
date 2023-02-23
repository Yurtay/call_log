import React, { useState } from "react";
import TelephoneMenu from "../components/ui/telephone/telephoneMenu";
import TelephoneTable from "../components/ui/telephone/telephoneTable";
import { useParams } from "react-router-dom";
import UserPage from "../components/ui/telephone/userPage/userPage";
import UserPageEdit from "../components/ui/telephone/userPage/userPageEdit";
import UserProvider from "../hooks/useUser";
import CallProvider from "../hooks/useCall";
import NewUser from "../components/ui/telephone/userPage/newUser";

const TelephoneDirectory = () => {
  const params = useParams();
  const { userId, edit } = params;
  const [sortUser, setSortUser] = useState(0);
  const handleSortUsers = (item) => {
    setSortUser(item);
  };

  return (
    <>
      <UserProvider>
        <CallProvider>
          {userId ? (
            userId === "new" ? (
              <NewUser />
            ) : edit ? (
              <UserPageEdit userId={userId} />
            ) : (
              <UserPage userId={userId} />
            )
          ) : (
            <div className="d-flex">
              <TelephoneMenu onSort={handleSortUsers} selectedItem={sortUser} />
              <div className="d-flex p-3">
                <TelephoneTable currentList={sortUser} />
              </div>
            </div>
          )}
        </CallProvider>
      </UserProvider>
    </>
  );
};

export default TelephoneDirectory;
