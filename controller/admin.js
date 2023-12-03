import User from '../models/user.js';

export const getAdmin = async (req, res) => {
	try {
		const user = await User.fetchAll();
		res.render('admin.ejs', {
			userData: user,
		});
	} catch (error) {
		console.log(error);
	}
};

export const getEditForm = async (req, res) => {
	const editMode = req.query.edit;
	if (!editMode) {
		res.redirect('/users');
	}

	const usrID = req.params.usrID;
	try {
		const userInfo = await User.findByID(usrID);
		res.render('form.ejs', {
			userData: userInfo,
			editing: editMode,
		});
	} catch (error) {
		console.log(error);
	}
};

export const editUser = (req, res) => {
	const user = new User(
		req.body.name,
		req.body.age,
		req.body.userID,
		req.body.email,
		req.body.bio,
		req.body.usrID
	);
	user
		.save()
		.then((result) => {
			res.redirect('/admin');
		})
		.catch((err) => {
			console.log(err);
		});
};

export const deleteUser = (req, res) => {
	const usrID = req.body.usrID;
	User.deleteByID(usrID)
		.then((result) => {
			res.redirect('/admin');
		})
		.catch((err) => console.log(err));
};