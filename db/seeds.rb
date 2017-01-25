# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create(username: 'apple', password: 'apples', admin: true)
User.create(username: 'banana', password: 'bananas', admin: true)
User.create(username: 'orange', password: 'oranges')
User.create(username: 'lemon', password: 'lemons')

Expense.create(user_id: 1, amount: 33243, description: 'food')
Expense.create(user_id: 1, amount: 52445, description: 'rent')
Expense.create(user_id: 2, amount: 1121214, description: 'car')
Expense.create(user_id: 3, amount: 1241, description: 'coffee')
Expense.create(user_id: 3, amount: 31240, description: 'computer')
Expense.create(user_id: 3, amount: 2400, description: 'movies')
Expense.create(user_id: 4, amount: 323400, description: 'tv')
Expense.create(user_id: 4, amount: 3023, description: 'internet')
