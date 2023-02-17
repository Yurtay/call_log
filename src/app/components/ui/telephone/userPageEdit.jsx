import React, { useEffect, useState } from "react";
import RadioField from "../../common/form/radioField";
import TextField from "../../common/form/textfield";
import API from "../../../api";
import Loading from "../../common/loading";
import { useHistory } from "react-router-dom";
import { validator } from "../../../utils/validator";

const UserPageEdit = ({ userId }) => {
  const history = useHistory();
  const [erros, setErros] = useState({});
  const [user, setUser] = useState();
  const [data, setData] = useState({
    name: "",
    number: "",
    filial: "",
  });
  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  useEffect(() => {
    if (user)
      setData({ name: user.name, number: user.id, filial: user.filial });
  }, [user]);

  useEffect(() => {
    API.users.getById(userId).then((data) => setUser(data));
  }, []);

  const validatorConfig = {
    name: {
      isRequired: {
        message: "Поле абонент не может быть пустым",
      },
    },
    number: {
      isRequired: {
        message: "Не должно быть пустым",
      },
      isDigit: {
        message: "Только цифры",
      },
    },
  };
  const validate = () => {
    const erros = validator(data, validatorConfig);
    setErros(erros);
    return Object.keys(erros).length === 0;
  };
  useEffect(() => {
    validate();
  }, [data]);
  const isValid = Object.keys(erros).length === 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(data);
    API.users
      .update(userId, { id: data.number, name: data.name, filial: data.filial })
      .then((data) => console.log(data));

    history.push(`/telephonedirectory/${data.number}`);
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
                    error={erros.name}
                  />
                  <TextField
                    name="number"
                    type="text"
                    value={data.number}
                    label="Номер"
                    onChange={handleChange}
                    error={erros.number}
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
                    disabled={!isValid}
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
