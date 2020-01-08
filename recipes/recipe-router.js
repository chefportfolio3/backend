const express = require('express');
const router = express.Router();

const db = require('../database/dbConfig.js');
const restricted = require('../auth/restricted-middleware');

const Recipes = require('./recipe-model');
// router.get('/', restricted, (req, res) => {
// 	db('recipes')
// 		.returning('id')
// 		.where({ user_id: req.decodedToken.subject })
// 		.then(recipes => {
// 			res.status(200).json(recipes);
// 		})
// 		.catch(error => {
// 			res.status(500).json({ error: 'The posts could not be retrieved.' });
// 		});
// });

router.get('/', (req, res) => {
	Recipes.getAllRecipe()
		.then(recipes => {
			res.status(200).json(recipes);
		})
		.catch(error => {
			res.status(500).json({ error: 'The posts could not be retrieved.' });
		});
});

router.get('/:id', (req, res) => {
	const { id } = req.params;

	db('recipes')
		.returning('id')
		.where({ id })
		.first()
		.then(recipe => {
			if (recipe) {
				res.status(200).json(recipe);
			} else {
				res
					.status(404)
					.json({ error: 'You cannot access the post with this specific id.' });
			}
		})
		.catch(error => {
			res.status(500).json({
				error: 'The action with the specified ID could not be retrieved'
			});
		});
});

router.post('/', (req, res) => {
	const recipe = req.body;

	Recipes.insert(recipe)
		.then(item => {
			res.status(200).json(item);
		})
		.catch(error => {
			res.status(500).json({
				error: 'There was an error while saving the post to the database.'
			});
		});
});

router.put('/:id', (req, res) => {
	const { id } = req.params;
	const changes = req.body;

	db('recipes')
		.where({ id })
		.update(changes)
		.returning('id')
		.then(count => {
			res
				.status(200)
				.json(changes)

				.catch(error => {
					res.status(500).json({
						error: 'Error with server'
					});
				});
		});
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	db('recipes')
		.where({ id })
		.del()
		.returning('id')
		.then(count => {
			if (count > 0) {
				res.status(200).json({ message: 'recipe deleted' });
			} else {
				res
					.status(404)
					.json({ error: 'You cannot access the post with this specific id.' });
			}
		})
		.catch(error => {
			res.status(500).json({
				error: 'The post could not be removed.'
			});
		});
});

module.exports = router;
