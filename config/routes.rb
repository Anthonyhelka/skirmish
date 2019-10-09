Rails.application.routes.draw do
  root 'homes#index'

  devise_for :users, :controllers => { registrations: 'registrations' }

  namespace :api do
    namespace :v1 do
      resources :teams, only: [:index]
    end
  end

  resources :teams, only: [:index]
  get 'authentication/is_signed_in', to: 'authentication#is_signed_in?'
end
