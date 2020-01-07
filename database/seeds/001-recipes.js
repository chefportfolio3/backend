exports.seed = function(knex) {
	return knex('recipes').insert([
		{
			chef_name: 'Sam',
			recipe_name: 'Easy French Toast Waffles',
			recipe_img: 'https://unsplash.com/photos/3o_7XOrqGcA'
		}, //1
		{
			chef_name: 'Abby',
			recipe_name: 'Candied Yam Cupcakes',
			recipe_img: 'https://unsplash.com/photos/IwXVYDPzEjo'
		} //2
	]);
};
