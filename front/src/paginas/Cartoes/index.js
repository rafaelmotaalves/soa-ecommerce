import { useEffect, useState } from 'react';
import api from "../../servicos/api"

export function CartoesController (props) {
  const [cartoes, setCartoes] = useState([]);

  useEffect(async () => {
    if (cartoes.length == 0) {
      let res = await api.get('/cartoes')
      let cards = res.data.data
      setCartoes(cards)
    }
  }, [])

  return (
    <div>
      <h1>Seus Cartões</h1>
      <ul>
        {cartoes.map(cartao => {
          return (
          <li key={cartao.id}>numero: {cartao.number} tipo: {cartao.card_type}</li>
          )
        })}
      </ul>
      <a href="/cartoes/cadastrar">Cadastrar novo</a>
    </div>
  )
}