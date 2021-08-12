class CartaoController < ApplicationController
  before_action :instanciar_fachada
  def index
    email = request.headers[:email]
    render json: {
      data: @fachada.encontrar_cartao(email)
    }, status: :ok
  end

  def create
    email = request.headers[:email]
    type = params[:type]
    name = params[:name]
    number = params[:number]
    expiration = params[:expiration]
    cvv = params[:cvv]
    render json: {
      data: @fachada.cadastrar_cartao(email, type, name, number, expiration, cvv)
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
