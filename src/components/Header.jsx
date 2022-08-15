import React from "react";
import { Link } from "react-router-dom";
import { getAuth } from "../utils/helpers";
import { toastifyAlertSuccess } from "./alert/tostifyAlert";

function Header() {
  let loginNow = getAuth();

  let logOut = () => {
    localStorage.removeItem("mv_token");
    localStorage.removeItem("mtuser");
    window.localStorage.removeItem("authNow");

    toastifyAlertSuccess("Logout Successfully", "top-right");
    // window.location.href = "/login";
  };

  return (
    <div className="header fixed-top">
      <div className="logo">
        <h1>MVTk</h1>
      </div>

      <div className="searchbar">
        <input type={"search"} placeholder="Search product" />
        <button>Search</button>
      </div>

      <div className="carts">
        <div className="d-flex align-items-center">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              style={{
                backgroundColor: "#009688",
                border: "none",
                padding: "18px",
                fontSize: "20px",
              }}
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Menu
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {!loginNow ? (
                <li>
                  <Link className="dropdown-item" to={"/login"}>
                    Sign in
                  </Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link className="dropdown-item" to={"/user"}>
                      User
                    </Link>
                  </li>
                  <li>
                    <button
                      className="dropdown-item btn btn-danger"
                      onClick={logOut}
                    >
                      Log out
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
