
import React from 'react';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import { Router, Route, Switch } from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import AddPostPage from '../components/AddPostPage';
import EditPostPage from '../components/EditPostPage';
import ReadPostPage from '../components/ReadPostPage';
import { createBrowserHistory } from 'history'; // needed to access history for non routed components
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

// Note: rendering header in PrivateRoute only
const AppRouter = () => (
   <Router history={history}>
      <div>
         <Switch> {/* Only the first comp with a matching path to current URL will be rendererd */}
            <PublicRoute path="/" component={LoginPage} exact={true}/>             
            <PrivateRoute path="/dashboard" component={DashboardPage}/>
            <PrivateRoute path="/addpost" component={AddPostPage}/>
            <PrivateRoute path="/edit/:id" component={EditPostPage}/>
            <PrivateRoute path="/read/:id" component={ReadPostPage}/>
            <Route component={NotFoundPage}/>
         </Switch>
      </div>
   </Router>
);

export default AppRouter;