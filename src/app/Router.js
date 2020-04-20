import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainScreen from "../main";
import TablesScreen from "../tables";
import AddTableScreen from "../addTable";
import ViewOrdersScreen from "../viewOrders";

const Router = () => (
  <Switch>
    <Route path="/main" component={MainScreen} />
    <Route path="/tables" component={TablesScreen} />
    <Route path="/addTable" component={AddTableScreen} />
    <Route path="/viewOrders" component={ViewOrdersScreen} />
    <Redirect path="*" to={"/main"} component={MainScreen} />
  </Switch>
);

export default Router;
