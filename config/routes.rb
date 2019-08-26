Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

# we could restrict this to only Read methods by adding
#`, only [:index, :show]` at the end of `resources :teachers`
resources :instructors
end
