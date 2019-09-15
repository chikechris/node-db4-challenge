
exports.seed = function (knex) {
  // Inserts seed entries
  return knex('instructions').insert([
    {
      recipe_id: 1,
      ingredient_id: 3,
      quantity: 4,
      step_number: 1,
      step: 'add to glass plate'
    },
    {
      recipe_id: 1,
      ingredient_id: 9,
      quantity: 4,
      step_number: 2,
      step: 'stir very well'
    },
    {
      recipe_id: 1,
      ingredient_id: 7,
      quantity: 2,
      step_number: 3,
      step: 'mix until combined'
    },
    {
      recipe_id: 1,
      ingredient_id: 5,
      quantity: 5,
      step_number: 4,
      step: 'cook very slow on high heat'
    },
    {
      recipe_id: 1,
      ingredient_id: 7,
      quantity: 2,
      step_number: 5,
      step: 'stir into mixture until well combined'
    },
    {
      recipe_id: 2,
      ingredient_id: 1,
      quantity: 4,
      step_number: 1,
      step: 'cut into fourths'
    },
    {
      recipe_id: 2,
      ingredient_id: 11,
      quantity: 4,
      step_number: 2,
      step: 'shear over grill for 7 minutes both sides'
    },
    {
      recipe_id: 2,
      ingredient_id: 3,
      quantity: 1,
      step_number: 3,
      step: 'add to shoulder and place in oven at 350 degrees'
    },
    {
      recipe_id: 3,
      ingredient_id: 6,
      quantity: 3,
      step_number: 1,
      step: 'cook at low heat'
    },
    {
      recipe_id: 3,
      ingredient_id: 5,
      quantity: 14,
      step_number: 2,
      step: 'cut into cubes a place over steaks'
    }
  ])
}

