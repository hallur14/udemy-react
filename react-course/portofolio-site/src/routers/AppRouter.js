import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ContactPage from '../components/ContactPage.js';
import DashboardPage from '../components/DashboardPage.js';
import Header from '../components/Header.js';
import NotFoundPage from '../components/NotFoundPage.js';
import PortfolioPage from '../components/PortfolioPage.js';
import PortfolioItem from '../components/PortfolioItemPage.js';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={DashboardPage} exact={true}/>
        <Route path="/portfolio" component={PortfolioPage} exact={true}/>
        <Route path="/portfolio/:id" component={PortfolioItem} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage}/>
      </Switch>
    </div>  
  </BrowserRouter>
);

export default AppRouter;