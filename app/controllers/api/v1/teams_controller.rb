class Api::V1::TeamsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!

  def index
    teams = current_user.teams
    render json: {
      teams: teams
    }
  end

  def create_team
    user_input = JSON.parse(request.body.read)
    team = Team.new(
      user: current_user,
      name: user_input["name"]
    )

    if team.save
      render json: { team: team }
    else
      render json: { error: team.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    team_id = JSON.parse(request.body.read)
    team = Team.find(team_id)
    user = current_user
    if user.id == team.user_id || user.role == "admin"
      team.delete
      render json: {status: "204"}
    else
      render json: {status: "403"}
    end
  end
end
