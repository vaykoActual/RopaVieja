class CategoriesController < ApplicationController
# GET /products
def index
  @categories = Category.all

  render json: @categories
end


end
