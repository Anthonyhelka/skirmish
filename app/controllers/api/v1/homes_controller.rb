class Api::V1::HomesController < ApplicationController
  def index
    render json: {
      signed_in: user_signed_in?
    }
  end
end
