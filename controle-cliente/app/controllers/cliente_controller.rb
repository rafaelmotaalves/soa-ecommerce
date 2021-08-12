class ClienteController < ApplicationController
  before_action :instanciar_fachada
  def create
    email = request.headers[:email]
    render json: {
      data: @fachada.cadastrar_cliente(email)
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
