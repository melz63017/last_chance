class RemovePasswordFrom < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :password
    remove_column :users, :password_confirmation
  end
end
