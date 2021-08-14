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
    if response.kind_of? Net::HTTPSuccess
      response.body
    else
      raise response.body
    end
  end

  def host
    ENV["ACESSO_HOST"].to_s
  end

  def port
    ENV["ACESSO_PORT"].to_i
  end
end