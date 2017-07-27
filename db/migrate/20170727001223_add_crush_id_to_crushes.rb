class AddCrushIdToCrushes < ActiveRecord::Migration[5.0]
  def change
    add_column :crushes, :crush_id, :string
  end
end
