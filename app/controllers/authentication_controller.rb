class AuthenticationController < ApplicationController
  def is_signed_in?
    if user_signed_in?
      render json: { signed_in: true } 
    else
      render json: { signed_in: false }
    end
  end

end
