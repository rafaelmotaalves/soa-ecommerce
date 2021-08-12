class ApplicationController < ActionController::API
  before_action :instanciar_fachada
  def instanciar_fachada
    @fachada = Fachada.new(
      Repositorios::RepositorioCliente.new,
      Repositorios::RepositorioClienteInternet.new,
      Repositorios::RepositorioCartao.new,
      Repositorios::RepositorioEndereco.new
    )
  end
end
