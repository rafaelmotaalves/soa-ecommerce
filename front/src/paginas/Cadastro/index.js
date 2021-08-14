import api from "../../servicos/api"
import { armazenarToken } from "../../servicos/auth"
import { CadastroView } from './view';

export function CadastroController (props) {
    async function cadastrar(email, senha) {
        await api.post('/cadastrar', { email, senha })
        props.history.push("/login")
    }

    return <CadastroView onSubmit={cadastrar}/>
}