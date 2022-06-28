class ShoesController < ApplicationController
    skip_before_action :authorized

    

    def create
        shoe = current_user.shoes.create!(shoe_params)
        render json: shoe, status: :created
    end

    def index
        shoes = Shoe.all
        render json: shoes, status: :ok
    end

    def show
        shoes = Shoe.find(params[:id])
        
        render(json: shoes, :include => :user)
    end

    def destroy
        shoe = Shoe.find(params[:id])
        shoe.destroy
        head :no_content
    end
    

    private
    def shoe_params
        params.permit(:brand, :model, :size, :price, :image, :colorway, :user_id )
    end
end
