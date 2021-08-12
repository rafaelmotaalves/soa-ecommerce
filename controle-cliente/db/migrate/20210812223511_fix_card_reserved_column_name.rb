class FixCardReservedColumnName < ActiveRecord::Migration[6.1]
  def change
    rename_column :cartaos, :type, :card_type
  end
end
