import express from 'express';
import { getUsers, postUsers } from '../controller/user.js';

const router = express.Router();

router.get('/users', getUsers);

router.post('/add-user', postUsers);

export default router;
