import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import { Todolist } from "./components/todolist";
import { Createtickets } from "./components/createtickets";
import { Detailtickets } from "./components/detailtickets";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={Todolist} />
          <Route path="/createtickets" exact component={Createtickets} />
          <Route
            path="/detailtickets/:todoId"
            exact
            component={Detailtickets}
          />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
