require 'net/http'

class Repositorios::RepositorioClienteInternet
  def cadastrar_cliente_internet(email, senha)
    return nil if email.blank? or senha.blank?

    body ={
      email: email,
      senha: senha
    }.to_json
  
    request = Net::HTTP::Post.new('/cadastrar', initheader = {'Content-Type' =>'application/json'})
    request.body = body
    response = Net::HTTP.new(host, port).start {|http| http.request(request)}
    response.body
  end

  def host
    'localhost'
  end

  def port
    '5000'
  end
end