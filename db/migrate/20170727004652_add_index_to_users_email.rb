class AddIndexToUsersEmail < ActiveRecord::Migration[5.0]
  def change
    add_index :users, :netId, unique: true
  end
end
