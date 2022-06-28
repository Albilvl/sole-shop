class UsersController < ApplicationController
  
    skip_before_action :authorized 
    

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def myshoes
        shoes =  current_user.shoes.all
        render json: shoes
    end


    

    private
    def user_params 
        params.permit(:username, :password, :email)
    end
end
 


