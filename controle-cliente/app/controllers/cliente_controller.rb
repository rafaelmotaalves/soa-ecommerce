class ClienteController < ApplicationController
  def create
    email = params[:email]
    senha = params[:senha]
    begin
      render json: {
        data: @fachada.cadastrar_cliente(email, senha)
      }, status: :ok
    rescue StandardError => e
      render json: {
        message: e
      }, status: :bad_request
    end
  end
end
