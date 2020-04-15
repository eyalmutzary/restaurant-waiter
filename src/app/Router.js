import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainScreen from "../main";
import TablesScreen from "../tables";


const Router = () => (
  <Switch>
    <Route path="/main" component={MainScreen} />
    <Route path="/tables" component={TablesScreen} />
    <Redirect path="*" to={"/main"} component={MainScreen} />
  </Switch>
);

export default Router;
