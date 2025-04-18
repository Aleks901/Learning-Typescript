import express from 'express';
import { createUser } from '../controllers/UserController';

const router: express.Router = express.Router();

router.post('/users', createUser);

export default router;
