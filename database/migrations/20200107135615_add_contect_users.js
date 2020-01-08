exports.up = function(knex) {
	return knex.schema.table('users', tb => {
		tb.string('contact', 255).not;
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.table('users', function(t) {
		t.dropColumn('contact');
	});
};
