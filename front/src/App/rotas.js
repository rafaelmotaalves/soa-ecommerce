import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { LoginController } from "../paginas/Login";
import { CadastroController } from "../paginas/Cadastro";
import { CadastroCartaoController } from "../paginas/CadastroCartao";
import { CartoesController } from "../paginas/Cartoes"
import { CadastroEnderecoController } from "../paginas/CadastroEndereco"
import { EnderecosController } from "../paginas/Enderecos"
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
      <Route exact path="/cadastrar" component={CadastroController} />
      <RotaAutenticada exact path="/cartoes/cadastrar" component={CadastroCartaoController} />
      <RotaAutenticada exact path="/enderecos/cadastrar" component={CadastroEnderecoController} />
      <RotaAutenticada exact path="/cartoes" component={CartoesController} />
      <RotaAutenticada exact path="/enderecos" component={EnderecosController} />
      <RotaAutenticada path="/hello" component={() => <h1>App</h1>} />
      <Route path="*" component={() => <h1>Pagina não encontrada</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Rotas;