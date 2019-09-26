Rails.application.routes.draw do
  root 'homes#index'
  
  devise_for :users, :controllers => { registrations: 'registrations' }

  get 'authentication/is_signed_in', to: 'authentication#is_signed_in?'

  get '/test', to: 'homes#index'

  namespace :api do
    namespace :v1 do
      get '/', to: 'homes#index'
    end
  end

end
