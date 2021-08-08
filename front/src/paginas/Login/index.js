import api from "../../servicos/api"
import { armazenarToken } from "../../servicos/auth"
import { LoginView } from './view';

export function LoginController (props) {
    async function login(email, senha) {
        const res = await api.post('/login', { email, senha })

        const token = res.data.token;
        
        armazenarToken(token);

        props.history.push("/hello")
    }

    return <LoginView onSubmit={login}/>
}