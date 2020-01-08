exports.up = function(knex) {
	return knex.schema.createTable('recipes', tb => {
		tb.increments();

		tb.string('chef_name', 255);
		tb.string('recipe_title', 255);
		tb.string('recipe_info', 255);
		tb.string('recipe_photo', 255);
		tb.string('meal_type', 255);
		tb.string('instructions', 255);
		tb.string('ingredients', 255);

		tb.integer('user_id')
			.unsigned()
			.notNullable()
			.references('id')
			.inTable('users')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('recipes');
};
