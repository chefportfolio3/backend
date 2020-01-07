exports.seed = function(knex) {
	return knex('steps').insert([
		//recipe 1
		{
			recipe_id: 1,
			step_number: 1,
			instructions: `Preheat a waffle iron according to manufacturer's instructions and spray with cooking spray.`
		},
		{
			recipe_id: 1,
			step_number: 2,
			instructions: `Whisk milk, eggs, maple syrup, vanilla extract, and salt together in a wide bowl until thoroughly combined. Dip bread slices 1 at a time in the egg mixture, coating both sides completely. Lift bread with a slotted spatula to allow excess egg mixture to drain back into the bowl. Place dipped bread slices on a rimmed baking sheet and let rest until mixture soaks in, about 2 minutes.`
		},
		{
			recipe_id: 1,
			step_number: 3,
			instructions: `Place dipped bread in the preheated waffle iron. Gently close the lid without forcing it down. Cook according to manufacturer's instructions until golden brown, 3 to 5 minutes. Repeat with remaining slices.`
		},

		//recipe 2
		{
			recipe_id: 2,
			step_number: 1,
			instructions: `Place a steamer insert into a large saucepan, and fill with water to just below the bottom of the steamer. Cover, and bring the water to a boil over high heat. Add the yams, recover, and steam until very tender, about 15 minutes. Remove yams from steamer and allow to cool slightly.`
		},
		{
			recipe_id: 2,
			step_number: 2,
			instructions: `Preheat oven to 350 degrees F (175 degrees C). Line 2-12 cup cupcake tins with paper liners.`
		},
		{
			recipe_id: 2,
			step_number: 3,
			instructions: `Place eggs, oil, sugar, vanilla extract, and cooked yams in a large bowl; beat with an electric mixer until light and fluffy. Sift together flour, baking powder, baking soda, cinnamon, and salt. Stir dry ingredients into yam mixture, mixing just until combined. Pour batter into paper liners, filling 2/3 full.`
		},
		{
			recipe_id: 2,
			step_number: 4,
			instructions: `Bake in preheated oven until a toothpick inserted in the center of a cupcake comes out clean, 17 to 20 minutes. Cool in pans for 5 minutes, transfer to wire rack to cool completely.`
		},
		{
			recipe_id: 2,
			step_number: 5,
			instructions: `Beat together cream cheese and butter until fluffy. Beat in the vanilla extract and confectioners sugar; mix until smooth. Frost cool cupcakes with cream cheese frosting.`
		}
	]);
};
