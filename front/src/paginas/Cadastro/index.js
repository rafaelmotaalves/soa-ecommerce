import api from "../../servicos/api"
import { CadastroView } from './view';

export function CadastroController (props) {
    async function cadastrar(email, senha) {
        await api.post('/cadastrar', { email, senha })
        props.history.push("/")
    }

    return <CadastroView onSubmit={cadastrar}/>
}