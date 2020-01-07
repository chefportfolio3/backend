exports.seed = function(knex) {
	//
	return knex('users')
		.del()
		.then(knex('users').insert([{ username: 'test', password: 'test' }]));
};
