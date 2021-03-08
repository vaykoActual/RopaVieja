class AddDescriptionToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :brand, :string
    add_column :products, :description, :string
    add_column :products, :price, :integer
  end
end
