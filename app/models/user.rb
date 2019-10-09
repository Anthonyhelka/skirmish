class User < ApplicationRecord
  has_many :teams

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable

  validates_uniqueness_of :username
end
