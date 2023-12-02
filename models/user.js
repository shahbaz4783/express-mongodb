import { getDB } from '../config/database.js';
import mongodb from 'mongodb';

export default class User {
	constructor(name, age, userID, email, bio) {
		this.name = name;
		this.age = age;
		this.userID = userID;
		this.email = email;
		this.bio = bio;
	}

	async save() {
		try {
			const db = getDB();
			const result = await db.collection('users').insertOne(this);
			console.log(result);
		} catch (err) {
			console.log(err);
		}
	}

	static async fetchAll() {
		try {
			const db = getDB();
			const result = await db.collection('users').find().toArray();
			return result;
		} catch (error) {
			console.log(error);
		}
	}

	static async findByID(usrID) {
		try {
			const db = getDB();
			const result = await db
				.collection('users')
				.find({ _id: new mongodb.ObjectId(usrID) })
				.toArray();
			return result[0];
		} catch (error) {
			console.log(error);
		}
	}
}
