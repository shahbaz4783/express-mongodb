import mongodb from 'mongodb';
import 'dotenv/config';

const mongoClient = mongodb.MongoClient;

export const mongoConnect = (cb) => {
	mongoClient
		.connect(process.env.MONGO_URI)
		.then((client) => {
			console.log('Connected');
			cb(client);
		})
		.catch((err) => console.log(err));
};
