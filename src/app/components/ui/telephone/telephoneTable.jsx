import React, { useEffect, useState } from "react";
import Loading from "../../common/loading";
import { Link } from "react-router-dom";

const TelephoneTable = ({ telephone }) => {
  const [searchNumber, setSearchNumber] = useState("");
  const [telephoneUsers, setTelephoneUsers] = useState();
  const handleSearchNumber = ({ target }) => {
    setSearchNumber(target.value);
  };
  useEffect(() => {
    setTelephoneUsers(telephone);
  }, [telephone]);

  const users = searchNumber
    ? telephoneUsers.filter(
        (numb) =>
          numb.id.toLowerCase().indexOf(searchNumber.toLowerCase()) !== -1
      )
    : telephoneUsers;

  return (
    <>
      {telephoneUsers ? (
        <div className="container mt-1 shadow">
          <div className="row">
            <input
              type="text"
              name="search"
              placeholder="Поиск по номеру телефона..."
              onChange={handleSearchNumber}
              value={searchNumber}
            />
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Телефон</th>
                  <th scope="col">Абонент</th>
                </tr>
              </thead>
              <tbody>
                {users.map((tel, index) => (
                  <tr key={index}>
                    <td>
                      <Link to={`/telephonedirectory/${tel.id}`}>{tel.id}</Link>
                    </td>
                    <td>
                      <Link to={`/telephonedirectory/${tel.id}`}>
                        {tel.name}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default TelephoneTable;
