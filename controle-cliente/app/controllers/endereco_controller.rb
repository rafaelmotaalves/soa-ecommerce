class EnderecoController < ApplicationController
  before_action :instanciar_fachada
  def index
    email = request.headers[:email]
    @fachada.encontrar_endereco(email)
    render json: {
      data: @fachada.encontrar_endereco(email)
    }, status: :ok
  end

  def create
    email = request.headers[:email]
    rua = params[:rua]
    numero = params[:numero]
    cidade = params[:cidade]
    uf = params[:uf]
    cep = params[:cep]
    render json: {
      data: @fachada.cadastrar_endereco(email, rua, numero, cidade, uf, cep)
    }, status: :ok
  end

  def instanciar_fachada
    @fachada = Fachada.new(
      Repositorios::RepositorioCliente.new,
      Repositorios::RepositorioCartao.new,
      Repositorios::RepositorioEndereco.new
    )
  end
end
