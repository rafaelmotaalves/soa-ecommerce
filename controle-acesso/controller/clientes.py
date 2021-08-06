from model.fachada import Fachada
from flask import jsonify, request
from model.fachada import Fachada


def cliente_to_json(cliente):
    return {
        'id': cliente.id,
        'email': cliente.email,
    }

class ControllerCliente():
    def __init__(self, fachada: Fachada):
        self.fachada = fachada

    def cadastrar_cliente(self):
        email = request.json['email']
        senha = request.json['senha']
    
        if not email or not senha:
            return jsonify({"message": "Email ou senha inválidos"}), 400

        cliente = self.fachada.cadastrar_cliente(email, senha)

        if not cliente:
            return jsonify({"message": "Erro ao cadastrar cliente"}), 500

        return cliente_to_json(cliente), 200

    def login_cliente(self):
        email = request.json['email']
        senha = request.json['senha']

        if not email or not senha:
            return jsonify({"message": "Email ou senha inválidos"}), 400

        token = self.fachada.login_cliente(email, senha)

        if not token:
            return jsonify({"message": "Erro ao logar cliente"}), 401

        return jsonify({"token": token}), 200

    def verificar_token(self):
        token = request.headers.get('token')
        if not token:
            return jsonify({'message': 'Token não encontrado'}), 401

        cliente = self.fachada.verificar_token(token)

        if not cliente:
            return jsonify({'message': 'Token inválido'}), 401

        return cliente_to_json(cliente), 200