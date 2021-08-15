import api from "../../servicos/api"
import { CadastroEnderecoView } from './view';

export function CadastroEnderecoController (props) {
    async function cadastrarEndereco(rua, numero, cidade, uf, cep) {
        await api.post('/enderecos/cadastrar', { rua, numero, cidade, uf, cep })
        props.history.push("/enderecos")
    }

    return <CadastroEnderecoView onSubmit={cadastrarEndereco}/>
}