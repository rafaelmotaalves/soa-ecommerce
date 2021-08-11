class CartaoController < ApplicationController
  before_action :instanciar_fachada
  def index
    email = params[:email]
    @fachada.encontrar_cartao(email)
  end

  def create
    email = params[:email]
    type = params[:type]
    name = params[:name]
    number = params[:number]
    expiration = params[:expiration]
    cvv = params[:cvv]
    @fachada.cadastrar_cartao(email, type, name, number, expiration, cvv)
  end

  def instanciar_fachada
    @fachada = Fachada.new(
      Repositorios::RepositorioCliente.new,
      Repositorios::RepositorioCartao.new,
      Repositorios::RepositorioEndereco.new
    )
  end
end
