import express from 'express';
import { deleteUser, editUser, getAdmin, getEditForm } from '../controller/admin.js';

const router = express.Router();

router.get('/', getAdmin);

router.get('/edit-user/:usrID', getEditForm);

router.post('/edit-user', editUser);

router.post('/delete-user', deleteUser);

export default router;
