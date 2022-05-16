Rails.application.routes.draw do
  resources :shoes, only: [:create, :index, :show ]
  resources :users, only: [:create] 
  post "/login", to: "auth#create"
  post '/auto_login', to: 'auth#auto_login'
  get '/logged_in', to: 'application#logged_in?'
  get "/myshoes", to: 'users#myshoes'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
