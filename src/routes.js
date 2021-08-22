import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import history from "./history";
import { BASE_URL, RoutesTable } from "./constants";
import { HomePage } from "./pages/home-page";
import CreateReactPage from "./pages/create-react-page";
 
function RouteConfig() {
  return (
    <Router history={history}>
      <Switch>
        <Route path={`${BASE_URL}/${RoutesTable.Home}`} exact={true}>
          <div className="App">
            <HomePage />
          </div>
        </Route>
        <Route path={`${BASE_URL}`} exact={true}>
          <div className="App">
            <HomePage  />
          </div>
        </Route> 
        <Route path={`${BASE_URL}${RoutesTable.ReactDefault}`} exact={true}>
          <div className="App">
            <CreateReactPage  />
          </div>
        </Route>       
      
      </Switch>
    </Router>
  );
}

export default RouteConfig;
