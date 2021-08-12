import api from "../../servicos/api"
import { armazenarToken } from "../../servicos/auth"
import { CadastroView } from './view';

export function CadastroController (props) {
    async function cadastrar(email, senha) {
        const res = await api.post('/cadastrar', { email, senha })
        const token = res.data.token;
        armazenarToken(token);
        props.history.push("/")
    }

    return <CadastroView onSubmit={cadastrar}/>
}