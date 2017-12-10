import React from 'react';
import { Router, Switch, Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddImagePage from '../components/AddImagePage';
import EditImagePage from '../components/EditImagePage';
import ImageDashboardPage from '../components/ImageDashboardPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import  LoginPage  from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
       <Switch>
       <Route path="/" exact component={LoginPage} />
       <PrivateRoute path="/dashboard" component={ImageDashboardPage} />
       <PrivateRoute path="/create" component={AddImagePage} />
       <PrivateRoute path="/edit/:id"  component={EditImagePage} />
       <Route path="/help"  component={HelpPage} />
       <Route component={NotFoundPage} />
       </Switch>
    </div>
   </Router>


)

export default AppRouter;