
exports.seed = function (knex) {
  // Inserts seed entries
  return knex('ingredients').insert([
    { ingredient_name: 'peanut butter' },
    { ingredient_name: 'cups of rice' },
    { ingredient_name: 'teaspoon salt' },
    { ingredient_name: 'cups of water' },
    { ingredient_name: 'melon seeds' },
    { ingredient_name: 'goat meat' },
    { ingredient_name: 'cups garri' },
    { ingredient_name: 'onions' },
    { ingredient_name: 'garlic' },
    { ingredient_name: 'pepper' },
    { ingredient_name: 'olive oil' },
    { ingredient_name: 'maggi cubes' },
    { ingredient_name: 'spinach' }
  ])
}

