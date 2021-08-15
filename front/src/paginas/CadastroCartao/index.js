import api from "../../servicos/api"
import { CadastroCartaoView } from './view';

export function CadastroCartaoController (props) {
    async function cadastrarCartao(type, name, number, expiration, cvv) {
        const res = await api.post(
          '/cartoes/cadastrar',
          { type, name, number, expiration, cvv }
        )
        console.log(res)
        props.history.push("/cartoes")
    }

    return <CadastroCartaoView onSubmit={cadastrarCartao}/>
}