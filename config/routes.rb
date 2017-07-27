Rails.application.routes.draw do
  root to: 'site#index'
  get 'users/new'
  resources :users
  get  '/signup',  to: 'users#new'
end
