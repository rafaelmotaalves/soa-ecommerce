import { useState } from 'react';

export function CadastroCartaoView (props) {
    const [tipo, setTipo] = useState('');
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [validade, setValidade] = useState('');
    const [cvv, setCvv] = useState('');
    const [menssagem, setMensagem] = useState('');

    function handleSubmit (e) {
        setMensagem("")
        e.preventDefault();
        props.onSubmit(tipo, nome, numero, validade, cvv).catch(err => {
            if (err.response) {
                const msg = err.response.data.message

                setMensagem(msg)
            }

        })
    }

    return <div>
        <h1>Cadastro de Cartão</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Tipo" value={tipo} onChange={(e) => setTipo(e.target.value)}/>
            <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
            <input type="text" placeholder="Número" value={numero} onChange={(e) => setNumero(e.target.value)}/>
            <input type="text" placeholder="Validade" value={validade} onChange={(e) => setValidade(e.target.value)}/>
            <input type="text" placeholder="Código CVV" value={cvv} onChange={(e) => setCvv(e.target.value)}/>
            <button type="submit">Cadastrar</button>
        </form>
        <p>{ menssagem }</p>
    </div>
} 