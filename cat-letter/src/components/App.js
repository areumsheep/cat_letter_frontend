import React from "react";
import { Switch, Route } from "react-router-dom";
import { MainPage } from "../pages/pages";
import './App.css';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </>
  );
};

export default App;
