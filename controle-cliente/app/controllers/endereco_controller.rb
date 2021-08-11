class EnderecoController < ApplicationController
  before_action :instanciar_fachada
  def index
    email = params[:email]
    @fachada.encontrar_endereco(email)
  end

  def create
    email = params[:email]
    rua = params[:rua]
    numero = params[:numero]
    cidade = params[:cidade]
    uf = params[:uf]
    cep = params[:cep]
    @fachada.cadastrar_endereco(email, rua, numero, cidade, uf, cep)
  end

  def instanciar_fachada
    @fachada = Fachada.new(
      Repositorios::RepositorioCliente.new,
      Repositorios::RepositorioCartao.new,
      Repositorios::RepositorioEndereco.new
    )
  end
end
