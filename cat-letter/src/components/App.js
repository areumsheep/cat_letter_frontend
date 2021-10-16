import React from "react";
import { Switch, Route } from "react-router-dom";
import { MainPage } from "../pages/pages";
// import './App.css';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </div>
  );
};

export default App;
