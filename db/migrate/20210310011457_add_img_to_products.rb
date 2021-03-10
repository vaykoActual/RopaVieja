class AddImgToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :imgURL, :string
  end
end
