import React from "react";
import { Switch, Route } from "react-router-dom";
import { ChooseTitlePage, TypeLetterPage } from "../pages/pages";
import "./App.css";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={ChooseTitlePage} />
        <Route exact path="/type_letter" component={TypeLetterPage} />
      </Switch>
    </>
  );
};

export default App;
