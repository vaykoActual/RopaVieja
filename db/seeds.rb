# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Product.destroy_all
Category.destroy_all
User.destroy_all



@ruby = User.create!(username: "ruby", email:"ruby@email.com", password: "123456")

puts "#{User.count} users created"

@men = Category.create!(name: 'men')
@women = Category.create!(name: 'women')
@kids = Category.create!(name: 'kids')

puts "#{Category.count} categories created"

Product.create!(name: 'Hoodies', imgURL: 'https://i.imgur.com/1V4i2OG.jpeg', user: @ruby, categories: [@men, @women])
Product.create!(name: 'Jacket', imgURL: 'https://i.imgur.com/bhA6Kxo.jpeg', user: @ruby, categories: [@men, @women])
Product.create!(name: 'Jeans', imgURL: 'https://i.imgur.com/RJImaOg.jpeg', user: @ruby, categories: [@men, @women])
Product.create!(name: 'Leather Jacket', imgURL: 'https://i.imgur.com/eT0dbUI.jpg', user: @ruby, categories: [@men, @women])
Product.create!(name: 'Trench Coat', imgURL: 'https://i.imgur.com/heev3kK.jpg', user: @ruby, categories: [@men, @women])
Product.create!(name: 'Baggy Jeans', imgURL: 'https://i.imgur.com/5ivSVDY.jpeg', user: @ruby, categories: [@men, @women])
Product.create!(name: 'T-Shirt', imgURL: 'https://i.imgur.com/ebUqsG7.jpg', user: @ruby, categories: [@men, @women])
Product.create!(name: 'Hoodies', imgURL: 'https://i.imgur.com/1V4i2OG.jpeg', user: @ruby, categories: [@men, @women])
Product.create!(name: 'Hoodies', imgURL: 'https://i.imgur.com/1V4i2OG.jpeg', user: @ruby, categories: [@men, @women])
Product.create!(name: 'Hoodies', imgURL: 'https://i.imgur.com/1V4i2OG.jpeg', user: @ruby, categories: [@men, @women])
Product.create!(name: 'Hoodies', imgURL: 'https://i.imgur.com/1V4i2OG.jpeg', user: @ruby, categories: [@men, @women])
Product.create!(name: 'T-Shirt', imgURL: 'https://i.imgur.com/0X6aXeN.jpeg', user: @ruby, categories: [@men, @women])
Product.create!(name: 'Hoodies', imgURL: 'https://i.imgur.com/1V4i2OG.jpeg', user: @ruby, categories: [@men, @women])
Product.create!(name: 'Hoodies', imgURL: 'https://i.imgur.com/1V4i2OG.jpeg', user: @ruby, categories: [@men, @women])
@women.products.create!(name: 'Blue Suede Shoes', imgURL: 'https://images.neimanmarcus.com/ca/1/product_assets/N/7/1/G/N/NMN71GN_mz.jpg', user: @ruby)
@sneakers = Product.create!(name: 'Air Jordans', imgURL: 'https://i.imgur.com/1jv5W7Q.jpeg', user: @ruby)
@sneakers.categories.push(@men, @women, @kids)

puts "#{Product.count} products created" 