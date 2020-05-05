import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, authedUser, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authedUser ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
          }}
        />
      )
    }
  />
);

export default ProtectedRoute;
