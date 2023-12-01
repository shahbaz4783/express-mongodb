import { getDB } from '../config/database.js';

export default class User {
	constructor(name, age, userID, email, bio) {
		    (this.name = name),
			(this.age = age),
			(this.userID = userID),
			(this.email = email),
			(this.bio = bio);
	}

	save() {
		const db = getDB();
		return db.collection('users')
			.insertOne(this)
			.then((result) => {
				console.log(result);
			})
			.catch((err) => {
				console.log(err);
			});
	}
}
