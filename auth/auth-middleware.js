const jwt = require('jsonwebtoken');
const secrets = require('../secrets');

module.exports = (req, res, next) => {
	const token = req.headers.authorization;
	// console.log(token);
	if (token) {
		jwt.verify(token, secrets, (err, decodedToken) => {
			if (err) {
				res.status(401).json({ message: 'Invalid Token!' });
			} else {
				req.decodedToken = decodedToken;
				next();
			}
		});
	} else {
		res.status(400).json({ message: 'no credentials provided' });
	}
};
