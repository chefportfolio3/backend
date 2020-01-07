exports.up = function(knex) {
	return (
		knex.schema

			//recipes table
			.createTable('recipes', tb => {
				tb.increments();
				tb.string('chef_name', 255);
				tb.string('recipe_name', 255);
				tb.string('recipe_img', 255);
			})

			//ingredients table
			.createTable('ingredients', tb => {
				tb.increments();
				tb.string('ingredient_name', 255).notNullable();
			})

			//recipe ingredients table
			.createTable('recipe_ingredients', tb => {
				tb.increments();
				tb.string('quantity', 255);
				// foreign keys
				tb.integer('recipe_id')
					.unsigned()
					.notNullable()
					.references('id')
					.inTable('recipes')
					.onDelete('RESTRICT')
					.onUpdate('CASCADE');
				tb.integer('ingredient_id')
					.unsigned()
					.notNullable()
					.references('id')
					.inTable('ingredients')
					.onDelete('RESTRICT')
					.onUpdate('CASCADE');
			})

			//steps table
			.createTable('steps', tb => {
				tb.increments();
				tb.integer('step_number').notNullable();
				tb.string('instructions', 400).notNullable();
				// foreign keys
				tb.integer('recipe_id')
					.unsigned()
					.notNullable()
					.references('id')
					.inTable('recipes')
					.onDelete('RESTRICT ')
					.onUpdate('CASCADE');
			})
	);
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists('recipes')
		.dropTableIfExists('ingredients')
		.dropTableIfExists('recipe_ingredients')
		.dropTableIfExists('steps');
};
