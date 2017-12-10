import React from 'react';
import { Router, Switch, Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddImagePage from '../components/AddImagePage';
import EditImagePage from '../components/EditImagePage';
import ImageDashboardPage from '../components/ImageDashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import  LoginPage  from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
       <Switch>
       <PublicRoute path="/" exact component={LoginPage} />
       <PrivateRoute path="/dashboard" component={ImageDashboardPage} />
       <PrivateRoute path="/create" component={AddImagePage} />
       <PrivateRoute path="/edit/:id"  component={EditImagePage} />
       <Route component={NotFoundPage} />
       </Switch>
    </div>
   </Router>


)

export default AppRouter;