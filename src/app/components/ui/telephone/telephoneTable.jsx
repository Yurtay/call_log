import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteUser,
  getUsers,
  getUsersLoadingStatus,
} from "../../../store/users";

const TelephoneTable = ({ currentList }) => {
  const users = useSelector(getUsers());
  const isLoading = useSelector(getUsersLoadingStatus());
  const [searchNumber, setSearchNumber] = useState("");
  const dispatch = useDispatch();
  const handleSearchNumber = ({ target }) => {
    setSearchNumber(target.value);
  };

  let filterUsers = [];
  if (currentList === 0) {
    filterUsers = users;
  } else if (currentList === 1) {
    filterUsers = users.filter((user) => user.filial === "kuphg");
  } else if (currentList === 2) {
    filterUsers = users.filter((user) => user.filial === "buavr");
  }

  const getFilterUsers = searchNumber
    ? filterUsers.filter((numb) => numb.id.indexOf(searchNumber) !== -1)
    : filterUsers;

  const handleDeleteUser = async (id) => {
    dispatch(deleteUser(id));
    console.log(id);
  };
  if (isLoading) return "Loading users...";
  return (
    <>
      <div className="d-flex justify-content-center">
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
                  <th scope="col">#</th>
                  <th scope="col">Телефон</th>
                  <th scope="col">Абонент</th>
                  <th scope="col">Подробнее</th>
                  <th scope="col">Редактирование</th>
                  <th scope="col">Удаление</th>
                </tr>
              </thead>
              <tbody>
                {getFilterUsers.map((tel, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{tel.id}</td>
                    <td>{tel.name}</td>
                    <td>
                      <Link to={`/telephonedirectory/${tel.id}`}>
                        <button className="btn btn-secondary">Подробнее</button>
                      </Link>
                    </td>
                    <td>
                      <Link to={`/telephonedirectory/${tel.id}/edit`}>
                        <button className="btn btn-secondary">
                          Редактировать
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteUser(tel.id)}
                      >
                        Удалить
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default TelephoneTable;
