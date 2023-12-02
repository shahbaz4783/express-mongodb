import express from 'express';
import { getUsers, getUsersDetail, postUsers } from '../controller/user.js';

const router = express.Router();

router.get('/users', getUsers);

router.get('/users/:usrID', getUsersDetail);

router.post('/add-user', postUsers);

export default router;
