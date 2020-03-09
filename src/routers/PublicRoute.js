
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// Used to make sure that when you are logged in and go back to a clean url,
// go get redirected to dashboard.
// Also when you are logged out and try to access other pages through url liek dashboard,
// you will stay in the login page
export const PublicRoute = ({
   isAuthenticated,
   component: Component,
   ...rest // the rest of the props passed in from AppRouter.js. such as exact, path, etc.
}) => (
   <Route {...rest} component={(props) => (
      isAuthenticated ? (
         <Redirect to="/dashboard" />
      ) : (
         <Component {...props} />
      )
   )}/>
);

const mapStateToProps = (state) => ({
   isAuthenticated: !!state.auth.uid // returns true if there is an uid, otherwise false.
});

export default connect(mapStateToProps)(PublicRoute);