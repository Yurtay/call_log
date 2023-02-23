import React, { useEffect, useState } from "react";
import RadioField from "../../common/form/radioField";
import TextField from "../../common/form/textfield";
import Loading from "../../common/loading";
import { useHistory } from "react-router-dom";
import httpService from "../../../services/http.servise";
import { useUser } from "../../../hooks/useUser";

const UserPageEdit = ({ userId }) => {
  const history = useHistory();
  // const [user, setUser] = useState();
  const [data, setData] = useState({
    name: "",
    id: "",
    filial: "",
  });
  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const getById = (id) => users.find((user) => user.id === id);
  const user = getById(userId);
  console.log(user);
  // useEffect(() => {
  //   if (user) setData({ name: user.name, id: user.id, filial: user.filial });
  // }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await httpService.put("user/" + data.id, data);
      // console.log(data);
      // history.push(`/telephonedirectory/${userId}`);
    } catch (error) {
      setErros(error);
    }
  };
  return (
    <div>
      {user ? (
        <>
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6 offset-md-3 shadow p-4">
                <h2>Редактирование абонентов</h2>
                <form onSubmit={handleSubmit}>
                  <TextField
                    name="name"
                    type="text"
                    value={data.name}
                    label="Абонент"
                    onChange={handleChange}
                  />
                  <TextField
                    name="id"
                    type="text"
                    value={data.id}
                    label="Номер"
                    onChange={handleChange}
                  />
                  <RadioField
                    options={[
                      { name: "КУПХГ", value: "kuphg" },
                      { name: "БУАВР", value: "buavr" },
                      { name: "Внешние абоненты", value: "other" },
                    ]}
                    value={data.filial}
                    name="filial"
                    onChange={handleChange}
                    label=""
                  />
                  <button
                    type="submit"
                    className="btn btn-primary w-100 mx-auto"
                  >
                    Сохранить
                  </button>
                </form>
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
    </div>
  );
};

export default UserPageEdit;