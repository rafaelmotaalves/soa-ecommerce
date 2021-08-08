import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { LoginController } from "../paginas/Login";

import { estaAutenticado } from "../servicos/auth";

const RotaAutenticada = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
        estaAutenticado() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Rotas = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginController} />
      <RotaAutenticada path="/hello" component={() => <h1>App</h1>} />
      <Route path="*" component={() => <h1>Pagina não encontrada</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Rotas;