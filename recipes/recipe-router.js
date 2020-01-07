const express = require('express');
const router = express.Router();

const db = require('../database/dbConfig.js');
const restricted = require('../auth/auth-middleware');

router.get('/myrecipe', restricted, (req, res) => {
	db('recipes')
		.returning('id')
		.where({ user_id: req.decodedToken.subject })
		.then(recipes => {
			res.status(200).json(recipes);
		})
		.catch(error => {
			res.status(500).json({ error: 'The posts could not be retrieved.' });
		});
});

router.get('/all', (req, res) => {
	db('recipes')
		.returning('id')
		.then(recipes => {
			res.status(200).json(recipes);
		})
		.catch(error => {
			res.status(500).json({ error: 'The posts could not be retrieved.' });
		});
});

router.get('/:id', restricted, (req, res) => {
	const { id } = req.params;

	db('recipes')
		.returning('id')
		.where({ id, user_id: req.decodedToken.subject })
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

router.post('/', restricted, (req, res) => {
	const recipe = req.body;

	if (!recipe.chef_name) {
		res.status(400).json({ error: 'Please provide a chef name for the post.' });
	} else {
		recipe.user_id = req.decodedToken.subject;
		db('recipes')
			.returning('id')
			.insert(recipe)
			.then(ids => {
				const id = ids[0];
				db('recipes')
					.returning('id')
					.where({ id })
					.first()
					.then(recipe => {
						res.status(201).json(recipe);
					});
			})
			.catch(error => {
				res.status(500).json({
					error: 'There was an error while saving the post to the database.'
				});
			});
	}
});

router.put('/:id', restricted, (req, res) => {
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

router.delete('/:id', restricted, (req, res) => {
	const { id } = req.params;
	db('recipes')
		.where({ id, user_id: req.decodedToken.subject })
		.del()
		.returning('id')
		.then(count => {
			if (count > 0) {
				res.status(200).json(count);
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

router.get('/:id/ingredient', (req, res) => {
	const id = req.params.id;
	Recipes.getIngredients(id)
		.then(list => {
			if (list) {
				res.status(200).json(list);
			} else {
				res.status(400).json({
					Error: 'Could Not Find The Data With Given ID'
				});
			}
		})
		.catch(err => {
			res.status(400).json({
				Error: 'Could Not Find The ShoppingLists'
			});
		});
});
router.get('/:id/instructions', (req, res) => {
	const id = req.params.id;
	Recipes.getInstructions(id)
		.then(inst => {
			if (inst) {
				res.status(200).json(inst);
			} else {
				res.status(400).json({
					Error: 'Could Not Find The Data With Given ID'
				});
			}
		})
		.catch(err => {
			res.status(400).json({
				Error: 'Could Not Find The Instructions'
			});
		});
});

module.exports = router;
