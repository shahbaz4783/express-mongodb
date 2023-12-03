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
