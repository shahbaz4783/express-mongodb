import express from 'express';
import { getAdmin, getEditForm } from '../controller/admin.js';

const router = express.Router();

router.get('/', getAdmin);

router.get('/edit-user/:usrID', getEditForm);

router.post('/edit-user', getAdmin);

export default router;
