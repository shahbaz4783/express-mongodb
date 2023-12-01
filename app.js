import express from 'express';
import 'dotenv/config';
import staticRoute from './routes/static.js';
import user from './routes/user.js';
import { mongoConnect } from './config/database.js';

const app = express();

app.use(express.urlencoded({extended: false}))
app.use(express.static('public'));
app.use(staticRoute);
app.use(user);

mongoConnect(() => {
	app.listen(process.env.PORT, () => {
		console.log(`Server is listening on ${process.env.PORT}`);
	});
});
