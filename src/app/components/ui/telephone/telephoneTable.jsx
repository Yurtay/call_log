import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../../hooks/useUser";

const TelephoneTable = () => {
  const { users } = useUser();
  const [searchNumber, setSearchNumber] = useState("");
  const handleSearchNumber = ({ target }) => {
    setSearchNumber(target.value);
  };

  const getFilterUsers = searchNumber
    ? users.filter((numb) => numb.id.indexOf(searchNumber) !== -1)
    : users;

  return (
    <>
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
              {getFilterUsers.map((tel, index) => (
                <tr key={index}>
                  <td>
                    <Link to={`/telephonedirectory/${tel.id}`}>{tel.id}</Link>
                  </td>
                  <td>
                    <Link to={`/telephonedirectory/${tel.id}`}>{tel.name}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TelephoneTable;
