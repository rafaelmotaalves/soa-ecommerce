class CartaoController < AuthenticatedController
  def index
    render json: {
      data: @fachada.encontrar_cartao(@email)
    }, status: :ok
  end

  def create
    type = params[:type]
    name = params[:name]
    number = params[:number]
    expiration = params[:expiration]
    cvv = params[:cvv]
    render json: {
      data: @fachada.cadastrar_cartao(@email, type, name, number, expiration, cvv)
    }, status: :ok
  end
end
