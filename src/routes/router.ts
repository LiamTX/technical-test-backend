import { Router } from 'express';

import UserController from '../controllers/UserController';
import CarController from '../controllers/CarController';

const router = Router();

router
    .get('/users/findAll', UserController.index)
    .post('/users/create', UserController.create);

router
    .get('/cars/findAll', CarController.index)
    .post('/cars/create', CarController.create);

export default router;