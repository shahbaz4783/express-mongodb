import express from 'express';
import 'dotenv/config';
import staticRoute from './routes/static.js'
import { mongoConnect } from './config/database.js';

const app = express();

app.use(staticRoute)

mongoConnect(() => {
    app.listen(process.env.PORT, () => {
			console.log(`Server is listening on ${process.env.PORT}`);
		});
})