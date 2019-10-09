class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.belongs_to :user, null: false
      t.string :name, null: false
    end
  end
end
