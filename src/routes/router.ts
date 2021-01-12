import { Router } from 'express';

import UserController from '../controllers/UserController';

const router = Router();

router
    .get('/users/findAll', UserController.index)
    .post('/users/create', UserController.create);

export default router;