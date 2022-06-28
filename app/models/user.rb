class User < ApplicationRecord
  has_secure_password
  
  has_many :shoes, dependent: :destroy


  validates :username, :email, uniqueness: {case_sensitive: false}
end
