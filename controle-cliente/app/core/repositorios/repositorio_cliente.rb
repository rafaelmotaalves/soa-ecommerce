class Repositorios::RepositorioCliente
  def encontrar_cliente(email)
    return nil if email.blank?

    Cliente.find_by(email: email)
  end

  def cadastrar_cliente(email)
    return nil if email.blank?

    Cliente.create!(email: email)
  end
end