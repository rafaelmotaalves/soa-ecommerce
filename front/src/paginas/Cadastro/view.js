import { useState } from 'react';

export function CadastroView (props) {
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
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
            <button type="submit">Cadastrar</button>
        </form>
        <p>{ menssagem }</p>
    </div>
} 