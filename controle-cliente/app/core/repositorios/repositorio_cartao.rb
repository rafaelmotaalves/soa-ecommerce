class Repositorios::RepositorioCartao
  def encontrar_cartao(cliente_id)
    return nil if cliente_id.blank?

    Cartao.find_by(cliente_id: cliente_id)
  end

  def cadastrar_cartao(cliente_id, type, name, number, expiration, cvv)
    return nil if cliente_id.blank?

    Cartao.create!(type: type, name: name,
                  number: number, expiration: expiration,
                  cvv: cvv, cliente_id: cliente_id)
  end
end