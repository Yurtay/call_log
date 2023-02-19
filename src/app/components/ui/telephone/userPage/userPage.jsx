import React, { useEffect, useState } from "react";
import API from "../../../../api";
import Loading from "../../../common/loading";
import UserCard from "./userCard";
import LastCalls from "./lastCalls";

const UserPage = ({ userId }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    API.users.getById(userId).then((data) => setUser(data));
  }, []);

  return (
    <>
      {user ? (
        <div className="container p-3">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <UserCard user={user} />
            </div>
            <div className="col-md-8">
              <LastCalls userId={userId} />
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default UserPage;
