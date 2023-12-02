import { userInfo } from 'os';
import User from '../models/user.js';

export const getUsers = async (req, res) => {
	try {
		const users = await User.fetchAll();
		res.render('users.ejs', {
			users: users,
		});
	} catch (err) {
		console.error(err);
	}
};

export const postUsers = (req, res) => {
	const user = new User(
		req.body.name,
		req.body.age,
		req.body.userID,
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

export const getUsersDetail = (req, res) => {
    const usrID = req.params.usrID
	User.findByID(usrID)
		.then((user) => {
			res.render('userInfo.ejs', {
				userInfo: user,
			});
		})
		.catch((err) => {
			console.log(err);
		});
};
