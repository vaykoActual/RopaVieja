class CategoriesProductsController < ApplicationController
  def add_category_to_product
    @product = Product.find(params[:id])
    @category = Category.find(params[:category_id])

    @product.categories << @category
    # -- OR --
    # @categories.products.push(@product)

    render json: @product, include: :categories
  end
end

