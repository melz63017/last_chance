class Crush < ApplicationRecord
  validates :crush_id, presence: true
  validates :email, presence: true
end
