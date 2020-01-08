const router = require('express').Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model');

const restricted = require('./restricted-middleware');
const secrets = require('../secrets');

router.post('/register', (req, res) => {
	let user = req.body;
	const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
	user.password = hash;

	Users.add(user)
		.then(saved => {
			res.status(201).json(saved);
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

router.post('/login', (req, res) => {
	let { username, password } = req.body;

	Users.findBy({ username })
		.first()
		.then(user => {
			if (user && bcrypt.compareSync(password, user.password)) {
				const token = generateToken(user.username);
				res.status(200).json({
					message: `Log in as > ${user.username}`,
					token
				});
			} else {
				res.status(401).json({ message: 'Invalid Credentials' });
			}
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

function generateToken(user) {
	const payload = {
		subject: user.id,
		username: user.username
	};
	const secret = process.env.JWT_SECRET || 'is it secret, is it safe?';
	const options = {
		expiresIn: '1d'
	};
	return jwt.sign(payload, secret, options);
}
router.get('/logout', (req, res) => {
	req.logout();
	res.status(200).json({
		message: 'User Log out !'
	});
});

router.get('/users', restricted, (req, res) => {
	Users.find()
		.then(users => {
			res.status(200).json({ loggedInUser: req.username, users });
		})
		.catch(err => res.send(err));
});

module.exports = router;
