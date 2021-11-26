import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';
// private route componant
const PrivateRoute = ({children, ...rest}) => {
    const {user,loading} =useAuth();

    if(loading){
        return( 
          <div class="d-flex justify-content-center my-5">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        );
    }

    return (
        <div>
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              // redirect to login
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    );
};

export default PrivateRoute;