Rails.application.routes.draw do
  resources :categories, only: :index
  resources :products
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users, only: [:create, :index]
  put '/categories/:category_id/products/:id', to: 'categories_products#add_category_to_product'
end