class ClienteController < ApplicationController
  def create
    email = params[:email]
    senha = params[:senha]
    render json: {
      data: @fachada.cadastrar_cliente(email, senha)
    }, status: :ok
  end
end
