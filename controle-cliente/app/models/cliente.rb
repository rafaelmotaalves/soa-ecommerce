class Cliente < ApplicationRecord
  has_many :cartao
  has_many :endereco
end
