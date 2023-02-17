import React, { useEffect, useState } from "react";
import API from "../../../api";
import Loading from "../../common/loading";
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
  const handleClickEdit = () => {
    history.push(history.location.pathname + "/edit");
  };
  const getNameFilial = () => {
    let name = "";
    if (user.filial === "kuphg") {
      name = "Канчуринское УПХГ";
    } else if (user.filial === "buavr") {
      name = "Башкирский УАВР";
    } else {
      name = "Внешний абонент";
    }
    return name;
  };

  return (
    <>
      {user ? (
        <>
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6 offset-md-3 shadow p-4">
                <h3>
                  Абонент: <small>{user.name}</small>
                </h3>
                <h3>
                  Номер: <small>{user.id}</small>
                </h3>
                <h3>
                  Филиал: <small>{getNameFilial()}</small>
                </h3>
                <div>
                  <button className="btn btn-primary m-3" onClick={handleClick}>
                    Назад
                  </button>
                  <button
                    className="btn btn-primary m-3"
                    onClick={handleClickEdit}
                  >
                    Изменить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 offset-md-3 shadow p-4">
              <Loading />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserPage;
