class Repositorios::RepositorioEndereco
  def encontrar_endereco(cliente_id)
    return nil if cliente_id.blank?

    Endereco.where(cliente_id: cliente_id)
  end

  def cadastrar_endereco(cliente_id, rua, numero, cidade, uf, cep)
    return nil if cliente_id.blank?

    Endereco.create!(rua: rua, numero: numero,
                    cidade: cidade, uf: uf,
                    cep: cep, cliente_id: cliente_id)
  end
end