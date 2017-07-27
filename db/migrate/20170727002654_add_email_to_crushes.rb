class AddEmailToCrushes < ActiveRecord::Migration[5.0]
  def change
    add_column :crushes, :email, :string
  end
end
