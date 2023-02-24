import React, { useState, useEffect } from "react";
import TextField from "../common/form/textfield";
import { validator } from "../../utils/validator";
import { useAuth } from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const history = useHistory();
  console.log("history");
  const { logIn } = useAuth();
  const [data, setData] = useState({ email: "", password: "" });
  const [erros, setErros] = useState({});
  const [enterError, setEnterError] = useState(null);
  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
    setEnterError(null);
  };
  const validatorConfig = {
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения",
      },
    },

    password: {
      isRequired: {
        message: "Поле пароль обязательно для заполнения",
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = validate();
    if (!isValid) return;

    try {
      console.log(data);
      await logIn(data);
      history.push(
        history.location.state.from.pathname
          ? history.location.state.from.pathname
          : "/"
      );
    } catch (error) {
      setEnterError(error.message);
    }
  };
  return (
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
      {enterError && <p className="text-danger">{enterError}</p>}
      <button
        disabled={!isValid || enterError}
        className="btn btn-primary w-100 mx-auto"
      >
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
