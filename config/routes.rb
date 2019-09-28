Rails.application.routes.draw do
  root 'homes#index'

  devise_for :users, :controllers => { registrations: 'registrations' }

  get 'authentication/is_signed_in', to: 'authentication#is_signed_in?'
end
