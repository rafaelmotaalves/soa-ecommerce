import os

database_host = os.environ.get('DATABASE_HOST', 'localhost')
database_port = os.environ.get('DATABASE_PORT', '15432')
secret_key = os.environ.get('SECRET_KEY', 'dev-secret-key')

DEBUG = True

SQLALCHEMY_DATABASE_URI = f'postgresql://postgres:password@{database_host}:{database_port}/acesso'
SQLALCHEMY_TRACK_MODIFICATIONS = False
SECRET_KEY = secret_key