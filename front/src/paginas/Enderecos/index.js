import { useEffect, useState } from 'react';
import api from "../../servicos/api"

export function EnderecosController (props) {
  const [enderecos, setEnderecos] = useState([]);

  useEffect(async () => {
    if (enderecos.length == 0) {
      let res = await api.get('/enderecos')
      let data = res.data.data
      console.log(data)
      setEnderecos(data)
    }
  }, [])

  return (
    <div>
      <h1>Seus Endereços</h1>
      <ul>
        {enderecos.map(endereco => {
          return (
          <li key={endereco.id}>numero: {endereco.rua} tipo: {endereco.numero}</li>
          )
        })}
      </ul>
      <a href="/enderecos/cadastrar">Cadastrar novo</a>
    </div>
  )
}