import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import ApiServices from "../apis/ApiServices";
import {
  toastifyAlertError,
  toastifyAlertSuccess,
} from "../components/alert/tostifyAlert";
import { setAuth, setToken, setUser } from "../utils/helpers";

function Login() {
  // email: test@example.com
  // password: 12345678
  const navigate = useNavigate();
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: "test@example.com",
      password: "12345678",
    }
  );

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setState({ [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    let res = await ApiServices.login(state);
    if (res.success === false) {
      toastifyAlertError(res.message, "top-right");
    } else if (res.success === true) {
      setToken(res.data.token);
      setAuth(true);
      setUser(res.data.name);
      toastifyAlertSuccess(res.message, "top-right");
      navigate("/");
    }

    // console.log(res);
    // console.log(state);
  };

  return (
    <div className="container">
      <form className="form">
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={state.email}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            value={state.password}
            className="form-control"
            onChange={inputChangeHandler}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={submitHandler}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
