import { Router } from 'express';

import CarController from '../controllers/CarController';

const router = Router();

router
    .get('/cars/findAll', CarController.index)
    .get('/cars/:car_id/find', CarController.findOne)
    .post('/cars/create', CarController.create)
    .delete('/cars/:car_id/delete', CarController.delete);

export default router;