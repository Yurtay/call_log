import React, { useState, useEffect } from "react";
import TextField from "../textfield";
import { validator } from "../../utils/validator";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [erros, setErros] = useState({});
  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const validatorConfig = {
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения",
      },
      isEmail: {
        message: "Email введен некорректно",
      },
    },

    password: {
      isRequired: {
        message: "Поле пароль обязательно для заполнения",
      },
      isCapitalSymbol: {
        message: "Пароль должен содержать хотя бы одну заглавную букву",
      },
      isContainDigit: {
        message: "Пароль должен содержать хотя бы одну цифру",
      },
      min: {
        message: "Пароль должен состоять минимум из 8 символов",
        value: 8,
      },
    },
  };
  useEffect(() => {
    validate();
  }, [data]);
  const validate = () => {
    const erros = validator(data, validatorConfig);
    setErros(erros);
    return Object.keys(erros).length === 0;
  };
  const isValid = Object.keys(erros).length === 0;
  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(data);
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <h3 className="mb-4">Login</h3>
          <form onSubmit={handleSubmit}>
            <TextField
              type="text"
              name="email"
              value={data.email}
              label="Электронная почта"
              onChange={handleChange}
              error={erros.email}
            />
            <TextField
              type="password"
              name="password"
              value={data.password}
              label="Пароль"
              onChange={handleChange}
              error={erros.password}
            />
            <button
              disabled={!isValid}
              className="btn btn-primary w-100 mx-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
