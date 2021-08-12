import api from "../../servicos/api"
import { CadastroEnderecoView } from './view';

export function CadastroEnderecoController (props) {
    async function cadastrarEndereco(type, name, number, expiration, cvv) {
        const res = await api.post('/cartoes/cadastrar', { type, name, number, expiration, cvv })
        console.log(res)
        props.history.push("/cartoes")
    }

    return <CadastroEnderecoView onSubmit={cadastrarEndereco}/>
}