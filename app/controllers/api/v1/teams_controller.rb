class Api::V1::TeamsController < ApplicationController
  def index
    teams = current_user.teams
    render json: {
      teams: teams
    }
  end
end
