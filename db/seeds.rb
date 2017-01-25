# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create(username: 'Andrew', password: 'apples', admin: true)
User.create(username: 'Bob', password: 'bananas', admin: true)
User.create(username: 'Chris', password: 'oranges')
User.create(username: 'Danielle', password: 'lemons')

Expense.create(user_id: 1, amount: 33243, description: 'food', created_at: '2017-01-01')
Expense.create(user_id: 1, amount: 52445, description: 'rent', created_at: '2017-01-11')
Expense.create(user_id: 2, amount: 1121214, description: 'car', created_at: '2017-01-21')
Expense.create(user_id: 3, amount: 1241, description: 'coffee', created_at: '2017-01-06')
Expense.create(user_id: 3, amount: 31240, description: 'computer', created_at: '2017-01-08')
Expense.create(user_id: 3, amount: 2400, description: 'movies', created_at: '2017-01-10')
Expense.create(user_id: 4, amount: 323400, description: 'tv', created_at: '2017-01-22')
Expense.create(user_id: 4, amount: 3023, description: 'internet', created_at: '2017-01-15')
