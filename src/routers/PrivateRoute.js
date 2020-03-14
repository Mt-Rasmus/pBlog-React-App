// Used to make sure authenticated users only can navigatate between certain pages

import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

// Used in AppRouter.js
// Only used to be able to render some conditional logic
// We only want to use certain routes when the user in authenticated (dashboard, add post, etc.)
export const PrivateRoute = ({
   isAuthenticated,
   component: Component,
   ...rest // the rest of the props passed in from AppRouter.js. such as exact, path, etc.
}) => (
   <Route {...rest} component={(props) => (
      isAuthenticated ? (
         <div>
            <Header/>  
            <Component {...props} />
         </div>
      ) : (
         <Redirect to="/" />
      )
   )}/>
);

const mapStateToProps = (state) => ({
   isAuthenticated: !!state.auth.uid // returns true if there is an uid, otherwise false.
});

export default connect(mapStateToProps)(PrivateRoute);
