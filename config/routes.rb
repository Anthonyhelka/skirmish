Rails.application.routes.draw do
  root 'homes#index'

  devise_for :users, :controllers => { registrations: 'registrations' }

  namespace :api do
    namespace :v1 do
      resources :teams, only: [:index]
      post 'teams/create_team', to: 'teams#create_team'
    end
  end

  resources :teams, only: [:index]

  get 'teams/create_team', to: 'teams#create_team'

  get 'authentication/is_signed_in', to: 'authentication#is_signed_in?'
end
