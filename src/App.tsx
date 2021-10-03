import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { History } from "history";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

type AppProps = {
  history: History;
  onSignIn: boolean;
}

export default ({ history, onSignIn } : AppProps) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/auth/signin">
            <Signin onSignIn={onSignIn} />
          </Route>
          <Route path="/auth/signup">
            <Signup onSignIn={onSignIn} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
