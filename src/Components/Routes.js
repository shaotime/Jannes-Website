import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./PageComponent/HomePage";
import ContactsPage from "./PageComponent/ContactsPage";
import PortfolioPage from "./PageComponent/PortfolioPage";
import ServicePage from "./PageComponent/ServicePage";

export default () =>
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/contacts" exact component={ContactsPage} />
    <Route path="/portfolio" exact component={PortfolioPage} />
    <Route path="/service" exact component={ServicePage} />
  </Switch>;
