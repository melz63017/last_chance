class ChangeColumnId < ActiveRecord::Migration[5.0]
  def change
    rename_column :crushes, :crush_id, :crush_netid
  end
end
