class CreateCartaos < ActiveRecord::Migration[6.1]
  def change
    create_table :cartaos do |t|
      t.string :type
      t.string :name
      t.string :number
      t.string :expiration
      t.string :cvv
      t.references :cliente, null: false, foreign_key: true

      t.timestamps
    end
  end
end
