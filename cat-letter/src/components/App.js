import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  ChooseTitlePage,
  TypeLetterPage,
  ConjureLetterPage,
  ShareLetterPage,
} from "../pages/pages";
import "./App.css";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={ChooseTitlePage} />
        <Route exact path="/type_letter" component={TypeLetterPage} />
        <Route exact path="/conjure_letter" component={ConjureLetterPage} />
        <Route exact path="/share_letter" component={ShareLetterPage} />
      </Switch>
    </>
  );
};

export default App;
