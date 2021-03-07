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

Product.create!(name: 'hoodie', user: @ruby, categories: [@men, @women])
@women.products.create!(name: 'shoes', user: @ruby)
@sneakers = Product.create!(name: 'sneakers', user: @ruby)
@sneakers.categories.push(@men, @women, @kids)

puts "#{Product.count} products created" 