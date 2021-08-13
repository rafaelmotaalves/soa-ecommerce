import { useState } from 'react';

export function CadastroEnderecoView (props) {
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [cep, setCep] = useState('');
    const [menssagem, setMensagem] = useState('');

    function handleSubmit (e) {
        setMensagem("")
        e.preventDefault();
        props.onSubmit(rua, numero, cidade, uf, cep).catch(err => {
            if (err.response) {
                const msg = err.response.data.message

                setMensagem(msg)
            }

        })
    }

    return <div>
        <h1>Cadastro de Endereços</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Rua" value={rua} onChange={(e) => setRua(e.target.value)}/>
            <input type="text" placeholder="Número" value={numero} onChange={(e) => setNumero(e.target.value)}/>
            <input type="text" placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)}/>
            <input type="text" placeholder="UF" value={uf} onChange={(e) => setUf(e.target.value)}/>
            <input type="text" placeholder="CEP" value={cep} onChange={(e) => setCep(e.target.value)}/>
            <button type="submit">Cadastrar</button>
        </form>
        <p>{ menssagem }</p>
    </div>
} 