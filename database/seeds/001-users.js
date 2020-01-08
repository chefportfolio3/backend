const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
	return knex('users').insert([
		{
			username: 'test',
			password: bcrypt.hashSync('password', 14),
			contact: '1-800-555-6666',
			location: 'Los Angeles, CA'
		}
	]);
};
