import jwt

from model.repositorio_cliente import RepositorioCliente
from model.cliente import Cliente

ALGORITHM = 'HS256'

class Fachada():
    def __init__(self, repositorio_cliente: RepositorioCliente, secret_key: str):
        self.repositorio_cliente = repositorio_cliente
        self.secret_key = secret_key

    def cadastrar_cliente(self, email, senha) -> Cliente:
        try:
            return self.repositorio_cliente.cadastrar_cliente(email, senha)
        except Exception as e:
            return None
    
    def login_cliente(self, email, senha) -> str:
        try:
            sucesso = self.repositorio_cliente.verificar_cliente(email, senha)
            print(sucesso)
            if not sucesso:
                return None

            return jwt.encode({"email": email}, self.secret_key, algorithm=ALGORITHM)
        except Exception as e:
            print(str(e))
            return None

    def verificar_token(self, token) -> Cliente:
        try:
            dados = jwt.decode(token, self.secret_key, algorithms=ALGORITHM)
            cliente_atual = self.repositorio_cliente.pegar_cliente_por_email(dados['email'])

            return cliente_atual
        except Exception as e:
            return None