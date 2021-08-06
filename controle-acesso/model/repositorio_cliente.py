from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

from model.cliente import Cliente

class RepositorioCliente:    
    def __init__(self, db: SQLAlchemy):
        self.db = db
    
    def pegar_cliente_por_email(self, email: str) -> Cliente:
        return self.db.session.query(Cliente).filter(Cliente.email == email).first()

    def listar_clientes(self):
        return self.db.session.query(Cliente).all()

    def cadastrar_cliente(self, email: str, senha: str) -> Cliente:
        hash_senha = generate_password_hash(senha)

        cliente = Cliente(email=email, senha=hash_senha)

        self.db.session.add(cliente)
        self.db.session.commit()

        return cliente

    def verificar_cliente(self, email: str, senha: str) -> bool:
        cliente = self.pegar_cliente_por_email(email)

        if cliente is None:
            return False
        
        return check_password_hash(cliente.senha, senha)