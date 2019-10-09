require "factory_bot_rails"

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    sequence(:username) {|n| "username#{n}" }
    password { "password" }
    password_confirmation { "password" }
  end

  factory :team do
    user { FactoryBot.create(:user) }
    name { Faker::Team.name }
  end

end
