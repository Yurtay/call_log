import React, { useState, useEffect } from "react";
import TelephoneMenu from "../ui/telephone/telephoneMenu";
import TelephoneTable from "../ui/telephone/telephoneTable";
import API from "../../api";
import { useParams } from "react-router-dom";
import UserPage from "../ui/telephone/userPage/userPage";
import UserPageEdit from "../ui/telephone/userPage/userPageEdit";

const TelephoneDirectory = () => {
  const params = useParams();
  const { userId, edit } = params;
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
  };

  return (
    <>
      {userId ? (
        edit ? (
          <UserPageEdit userId={userId} />
        ) : (
          <UserPage userId={userId} />
        )
      ) : (
        <div className="d-flex">
          <div className="d-flex flex-column flex-shrink-0 p-3 mt-1 shadow">
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
