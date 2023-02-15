import React, { useState, useEffect } from "react";
import TelephoneMenu from "../telephone/telephoneMenu";
import TelephoneTable from "../telephone/telephoneTable";
import API from "../../api";
import { useParams } from "react-router-dom";
import UserPage from "../telephone/userPage";

const TelephoneDirectory = () => {
  const params = useParams();
  const { userId } = params;
  console.log(userId);
  const [usersFlag, setUsersFlag] = useState(1);
  const [userPHG, setUserPHG] = useState();
  const [userUAVR, setUserUAVR] = useState();
  const [userALL, setUserALL] = useState();
  useEffect(() => {
    API.users.fetchUsersPHG().then((data) => setUserPHG(data));
    API.users.fetchUsersUAVR().then((data) => setUserUAVR(data));
    API.users.fetchUsers().then((data) => setUserALL(data));
  }, []);

  const hadleChangeFlag = (id) => {
    setUsersFlag(id);
    console.log(usersFlag);
  };

  return (
    <>
      {userId ? (
        <UserPage userId={userId} />
      ) : (
        <div className="d-flex">
          <div className="d-flex flex-column flex-shrink-0 p-3">
            <TelephoneMenu
              onChangeFlag={hadleChangeFlag}
              selectedItem={usersFlag}
            />
          </div>
          <div className="d-flex flex-column p-3">
            <div className="d-flex justify-content-center">
              <TelephoneTable
                telephone={
                  usersFlag === 1
                    ? userPHG
                    : usersFlag === 2
                    ? userUAVR
                    : userALL
                }
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TelephoneDirectory;
