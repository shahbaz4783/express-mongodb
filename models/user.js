import { getDB } from '../config/database.js';
import mongodb from 'mongodb';

export default class User {
	constructor(name, age, userID, email, bio, id) {
		this.name = name;
		this.age = age;
		this.userID = userID;
		this.email = email;
		this.bio = bio;
		if (id) {
			this._id = new mongodb.ObjectId(id);
		}
	}

	async save() {
		const db = getDB();
		let dbOp;
		if (this._id) {
			dbOp = db
				.collection('users')
				.updateOne({ _id: this._id }, { $set: this });
		} else {
			dbOp = db.collection('users').insertOne(this);
		}
		try {
			return await dbOp;
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

	static async deleteByID(usrID) {
		try {
			const db = getDB();
			const remove = await db
				.collection('users')
				.deleteOne({ _id: new mongodb.ObjectId(usrID) });
            return remove
		} catch (error) {
			console.log(error);
		}
	}
}
