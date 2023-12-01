import express from 'express';
import { homeRoute } from '../controller/static.js';

const router = express.Router();

router.get('/', homeRoute )

export default router;
