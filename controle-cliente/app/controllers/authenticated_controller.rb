class AuthenticatedController < ApplicationController
  before_action :set_email

  def set_email
    @email = request.headers['email-cliente']
    if @email.blank?
      render json: {
        message: "Usuário não autenticado" 
      }, status: :unauthorized
      return
    end
  end
end
