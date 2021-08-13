class Fachada
  def initialize(repo_cliente, repo_cliente_internet, repo_cartao, repo_endereco)
    @repo_cliente = repo_cliente
    @repo_cliente_internet = repo_cliente_internet
    @repo_cartao = repo_cartao
    @repo_endereco = repo_endereco
  end

  def cadastrar_cliente(email, senha)
    @repo_cliente.cadastrar_cliente(email)
    @repo_cliente_internet.cadastrar_cliente_internet(email, senha)
  end

  def encontrar_endereco(email)
    cliente = @repo_cliente.encontrar_cliente(email)
    @repo_endereco.encontrar_endereco(cliente.id)
  end

  def encontrar_cartao(email)
    cliente = @repo_cliente.encontrar_cliente(email)
    @repo_cartao.encontrar_cartao(cliente.id)
  end

  def cadastrar_cartao(email, type, name, number, expiration, cvv)
    cliente = @repo_cliente.encontrar_cliente(email)
    @repo_cartao.cadastrar_cartao(cliente.id, type, name, number, expiration, cvv)
  end

  def cadastrar_endereco(email, rua, numero, cidade, uf, cep)
    cliente = @repo_cliente.encontrar_cliente(email)
    @repo_endereco.cadastrar_endereco(cliente.id, rua, numero, cidade, uf, cep)
  end
end