from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config.from_object("config")

db = SQLAlchemy(app)

from model.repositorio_cliente import RepositorioCliente
from model.fachada import Fachada
from controller.clientes import ControllerCliente

repositorio_cliente = RepositorioCliente(db)
fachada = Fachada(repositorio_cliente, app.config['SECRET_KEY'])
controller_cliente = ControllerCliente(fachada)

@app.route("/")
def hello():
    print(request.headers)
    return "Hello!!"

@app.route("/login", methods=["POST"])
def login():
    return controller_cliente.login_cliente()

@app.route("/verificar", methods=["GET"])
def verificar():
    return controller_cliente.verificar_token()

@app.route("/cadastrar", methods=["POST"])
def cadastrar():
    return controller_cliente.cadastrar_cliente()

db.create_all()