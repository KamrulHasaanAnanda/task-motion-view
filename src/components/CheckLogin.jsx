import React from "react";
import { Link } from "react-router-dom";
import { getToken } from "../utils/helpers";

function CheckLogin(Component) {
  const withAuth = (props) => {
    let token = getToken();

    if (token) {
      return <Component {...props} />;
    } else {
      return (
        <h1 className="text-center p-5">
          Access denied <Link to="/login">Click here to Login</Link>
        </h1>
      );
    }
  };
  return withAuth;
}

// // console.log("token :>> ", token);
// useEffect(() => {
//   if (token) {
//     setloading(false);
//   } else {
//     setloading(false);
//   }
// }, [token]);

// // if (token) {
// //
// // }
// return <>{loading ? <Loader /> : children}</>;

export default CheckLogin;
