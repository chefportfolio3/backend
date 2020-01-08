exports.seed = function(knex) {
	return knex('recipes').insert([
		{
			chef_name: 'Sam',
			recipe_title: 'French Toast Waffles',
			recipe_info: 'making an easy French toast for your morning.',
			recipe_photo: 'https://unsplash.com/photos/3o_7XOrqGcA',
			meal_type: 'breakfast',
			ingredients:
				'cooking spray, 1/2 cup whole milk,2 large eggs,1 tablespoon maple syrup, 1/2 teaspoon vanilla extract,1 pinch salt,4 pieces 1/2-inch thick pieces brioche ',
			instructions: `Step 1: Preheat a waffle iron according to manufacturer's instructions and spray with cooking spray,  Step 2: Whisk milk, eggs, maple syrup, vanilla extract, and salt together in a wide bowl until thoroughly combined. Dip bread slices 1 at a time in the egg mixture, coating both sides completely. Lift bread with a slotted spatula to allow excess egg mixture to drain back into the bowl. Place dipped bread slices on a rimmed baking sheet and let rest until mixture soaks in, about 2 minutes, Step 3: Place dipped bread in the preheated waffle iron. Gently close the lid without forcing it down. Cook according to manufacturer's instructions until golden brown, 3 to 5 minutes. Repeat with remaining slices. `,
			user_id: 1
		}
	]);
};
