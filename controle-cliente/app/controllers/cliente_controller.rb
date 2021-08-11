class ClienteController < ApplicationController
  before_action :instanciar_fachada
  def create
    email = params[:email]
    @fachada.cadastrar_cliente(email)
  end

  def instanciar_fachada
    @fachada = Fachada.new(
      Repositorios::RepositorioCliente.new,
      Repositorios::RepositorioCartao.new,
      Repositorios::RepositorioEndereco.new
    )
  end
end
