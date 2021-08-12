Rails.application.routes.draw do
  post 'cadastrar', to: 'cliente#create'
  get 'enderecos', to: 'endereco#index'
  post 'enderecos/cadastrar', to: 'endereco#create'
  get 'cartoes', to: 'cartao#index'
  post 'cartoes/cadastrar', to: 'cartao#create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
