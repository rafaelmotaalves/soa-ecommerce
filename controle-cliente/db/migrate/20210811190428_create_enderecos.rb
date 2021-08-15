class CreateEnderecos < ActiveRecord::Migration[6.1]
  def change
    create_table :enderecos do |t|
      t.string :rua
      t.string :numero
      t.string :cidade
      t.string :uf
      t.string :cep
      t.references :cliente, null: false, foreign_key: true

      t.timestamps
    end
  end
end
