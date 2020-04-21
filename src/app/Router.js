import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import TablesScreen from "../tables";
import AddTableScreen from "../addTable";
import ViewOrdersScreen from "../viewOrders";

const Router = () => (
  <Switch>
    <Route path="/tables" component={TablesScreen} />
    <Route path="/addTable" component={AddTableScreen} />
    <Route path="/viewOrders" component={ViewOrdersScreen} />
    <Redirect path="*" to={"/tables"} component={TablesScreen} />
  </Switch>
);

export default Router;
