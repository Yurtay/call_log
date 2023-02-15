import React, { useEffect, useState } from "react";
import API from "../../api";
import Loading from "../../utils/loading";
import { useHistory } from "react-router-dom";

const UserPage = ({ userId }) => {
  const history = useHistory();
  const [user, setUser] = useState();
  useEffect(() => {
    API.users.getById(userId).then((data) => setUser(data));
  }, []);
  const handleClick = () => {
    history.push("/telephonedirectory");
  };
  return (
    <>
      {user ? (
        <>
          <h2>User page {userId}</h2>
          <h3>Имя: {user.name}</h3>
          <h3>Телефон: {user.id}</h3>
          <button className="btn btn-primary m-3" onClick={handleClick}>
            Все пользователи
          </button>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default UserPage;
