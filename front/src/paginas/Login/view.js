import { useState } from 'react';

export function LoginView (props) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [menssagem, setMensagem] = useState('');

    function handleSubmit (e) {
        setMensagem("")
        e.preventDefault();
        props.onSubmit(email, senha).catch(err => {
            if (err.response) {
                const msg = err.response.data.message

                setMensagem(msg)
            }

        })
    }

    return <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
            <button type="submit">Entrar</button>
            <div>
             <a href="/cadastrar">Cadastre-se</a>
            </div>
        </form>
        <p>{ menssagem }</p>
    </div>
} 