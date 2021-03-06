Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :expenses, only: [:index, :create, :destroy, :update]

    get 'expenses/search', to: 'expenses#search'
  end
end
