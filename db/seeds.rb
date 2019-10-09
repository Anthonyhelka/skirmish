require_relative "../spec/support/factory_bot.rb"

if Rails.env.development?

  User.delete_all
  Team.delete_all

  team_1 = FactoryBot.create(:team)
  team_2 = FactoryBot.create(:team)
  team_3 = FactoryBot.create(:team)

end
