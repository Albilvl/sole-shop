class ShoeSerializer < ActiveModel::Serializer
  attributes :id, :model, :size, :brand, :price, :colorway, :image
  has_one :user


end
