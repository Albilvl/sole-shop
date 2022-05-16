class Shoe < ApplicationRecord
  belongs_to :user

  validates :model, :brand, :price, :size, :image, :colorway, presence: true
end
