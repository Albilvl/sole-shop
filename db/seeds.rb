# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "destroying previous data"
User.destroy_all
Shoe.destroy_all

puts "creating user"
user_test = User.create(username: "user_test", email: "user_test@yoyo@.com", password: "password")

puts "creating shoes"
s1 = Shoe.create(brand: "Nike", model: "Jordan 1", size: 12, price: 500, colorway: "Hyper Royal", image: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Hyper-Royal-Smoke-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1618238995", user_id: user_test.id)
s2 = Shoe.create(brand: "Nike", model: "Jordan 1", size: 8, price: 500, colorway: "Turbo Green", image: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Turbo-Green-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606324093", user_id: user_test.id)
s3 = Shoe.create(brand: "Nike", model: "Jordan 6", size: 9.5, price: 500, colorway: "Travis Scott Wheat", image: "https://cdn.flightclub.com/TEMPLATE/207250/1.jpg", user_id: user_test.id)
s4 = Shoe.create(brand: "Nike", model: "Jordan 4", size: 8, price: 650, colorway: "Black Cat", image: "https://images.stockx.com/images/Air-Jordan-4-Retro-Black-Cat-2020-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606315877", user_id: user_test.id)
s5 = Shoe.create(brand: "Nike", model: "Jordan 1", size: 10, price: 500, colorway: "Fragment Travis Scott", image: "https://images.stockx.com/images/Air-Jordan-1-High-OG-SP-fragment-design-x-Travis-Scott-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1628097985", user_id: user_test.id)
s6 = Shoe.create(brand: "Nike", model: "Air Max", size: 12, price: 500, colorway: "Patta Blue", image: "https://cdn.flightclub.com/TEMPLATE/283231/1.jpg", user_id: user_test.id)
s7 = Shoe.create(brand: "Nike", model: "Fear of God", size: 7, price: 500, colorway: "Bone", image: "https://images.stockx.com/images/Nike-Air-Fear-Of-God-1-Light-Bone-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1607044139", user_id: user_test.id)
s8 = Shoe.create(brand: "Adidas", model: "Yeezy Foam Runner", size: 4, price: 600, colorway: "Sand", image: "https://cdn.flightclub.com/TEMPLATE/255869/1.jpg", user_id: user_test.id)


puts "seeding completed"