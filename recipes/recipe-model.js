const db = require('../database/dbConfig.js');

module.exports = {
	getAllRecipe,
	insert,
	addRecipe,
	findRecById,
	remove
};

function getAllRecipe() {
	return db('recipes');
}

function insert(recipe) {
	return db('recipes').insert(recipe);
}

async function addRecipe(recipe) {
	const [id] = await db('recipes').insert(recipe, 'id');

	return findRecById(id);
}

function findRecById(id) {
	return db('recipes')
		.where({ id })
		.first();
}

function remove(id) {
	return db('recipes')
		.where({ id })
		.del();
}
