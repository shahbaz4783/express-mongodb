import User from '../models/user.js';

export const getUsers = (req, res) => {
	res.send('users');
};

export const postUsers = (req, res) => {
	const user = new User(
		req.body.name,
		req.body.userID,
		req.body.age,
		req.body.email,
		req.body.bio
	);
	user
		.save()
		.then((result) => {
			console.log(result);
			res.redirect('/users');
		})
		.catch((err) => {
			console.log(err);
		});
};
