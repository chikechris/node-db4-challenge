
exports.seed = function (knex) {
  // Inserts seed entries
  return knex('recipes').insert([
    { recipe_name: 'PeanutButter Soup' },
    { recipe_name: 'Rice and Stew' },
    { recipe_name: 'Egusi Soup' },
    { recipe_name: 'Coconut Rice' }
  ])
}

