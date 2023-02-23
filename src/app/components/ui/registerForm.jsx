import React, { useState, useEffect } from "react";
import TextField from "../common/form/textfield";
import { validator } from "../../utils/validator";
import RadioField from "../common/form/radioField";
import { useAuth } from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";

const RegisterForm = () => {
  const history = useHistory();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { signUp } = useAuth();
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

  const validate = () => {
    const erros = validator(data, validatorConfig);
    setErros(erros);
    return Object.keys(erros).length === 0;
  };
  useEffect(() => {
    validate();
  }, [data]);
  const isValid = Object.keys(erros).length === 0;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    try {
      await signUp(data);
      history.push("/");
    } catch (error) {
      setErros(error);
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

      <button disabled={!isValid} className="btn btn-primary w-100 mx-auto">
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
