exports.seed = function(knex) {
	return knex('ingredients').insert([
		{ ingredient_name: 'eggs' }, //1
		{ ingredient_name: 'yams' }, //2
		{ ingredient_name: 'canola oil' }, //3
		{ ingredient_name: 'sugar' }, //4
		{ ingredient_name: 'all purpose flour' }, //5
		{ ingredient_name: 'salt' }, //6
		{ ingredient_name: 'cream cheese' }, //7
		{ ingredient_name: 'vanilla extract' }, //8
		{ ingredient_name: 'cooking spray' }, //9
		{ ingredient_name: 'whole milk' }, //10
		{ ingredient_name: 'syrup' }, //11
		{ ingredient_name: 'thick pieces brioche' } //12
	]);
};
