import mongodb from 'mongodb';
import 'dotenv/config';

const mongoClient = mongodb.MongoClient;

let _db;

export const mongoConnect = async (cb) => {
	try {
		const client = await mongoClient.connect(process.env.MONGO_URI);
		console.log('Connected');
		_db = client.db();
		cb(client);
	} catch (err) {
		console.log(err);
		throw err;
	}
};

export const getDB = () => {
	if (_db) {
		return _db;
	}
	throw 'No Database Found';
};