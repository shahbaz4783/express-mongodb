import express from 'express';
import { getAdmin } from '../controller/admin.js';

const router = express.Router();

router.get('/', getAdmin);

export default router;
