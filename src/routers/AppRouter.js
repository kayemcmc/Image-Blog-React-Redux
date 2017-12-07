import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import AddImagePage from '../components/AddImagePage';
import EditImagePage from '../components/EditImagePage';
import ImageDashboardPage from '../components/ImageDashboardPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';



const AppRouter = () => (
    <BrowserRouter>
    <div>
       <Header />
       <Switch>
       <Route path="/" exact component={ImageDashboardPage} />
       <Route path="/create" component={AddImagePage} />
       <Route path="/edit/:id"  component={EditImagePage} />
       <Route path="/help"  component={HelpPage} />
       <Route component={NotFoundPage} />
       </Switch>
    </div>
   </BrowserRouter>


)

export default AppRouter;