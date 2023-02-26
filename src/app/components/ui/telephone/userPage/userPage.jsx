import React from "react";
import UserCard from "./userCard";
import LastCalls from "./lastCalls";
import { useSelector } from "react-redux";
import { getUsers } from "../../../../store/users";

const UserPage = ({ userId }) => {
  const users = useSelector(getUsers());

  const getById = (id) => users.find((user) => user.id === id);
  const user = getById(userId);

  return (
    <>
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
    </>
  );
};

export default UserPage;
