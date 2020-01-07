exports.seed = function(knex) {
	return knex('recipe_ingredients').insert([
		//2 Candied Yam Cupcakes
		{ recipe_id: 2, ingredient_id: 1, quantity: '4' },
		{ recipe_id: 2, ingredient_id: 2, quantity: '1 lb' },
		{ recipe_id: 2, ingredient_id: 3, quantity: '1 cup' },
		{ recipe_id: 2, ingredient_id: 4, quantity: '1 cup' },
		{ recipe_id: 2, ingredient_id: 5, quantity: '2 cups' },
		{ recipe_id: 2, ingredient_id: 6, quantity: '1 teaspoon' },
		{ recipe_id: 2, ingredient_id: 7, quantity: '3 ounces' },
		{ recipe_id: 2, ingredient_id: 8, quantity: '1 teaspoon' },
		///1 Easy French Toast Waffles
		{ recipe_id: 1, ingredient_id: 9, quantity: 'spray' },
		{ recipe_id: 1, ingredient_id: 10, quantity: '1/2 cup' },
		{ recipe_id: 1, ingredient_id: 1, quantity: '2' },
		{ recipe_id: 1, ingredient_id: 11, quantity: '1 teaspoon' },
		{ recipe_id: 1, ingredient_id: 8, quantity: '1/2 teaspoon' },
		{ recipe_id: 1, ingredient_id: 12, quantity: '4 pieces 1/2-inch' }
	]);
};
