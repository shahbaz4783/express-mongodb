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

export const editUser = (req, res) => {};