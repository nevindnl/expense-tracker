class Expense < ActiveRecord::Base
  validates :user_id, :amount, :description, :created_at, presence: true

  belongs_to :user
end
