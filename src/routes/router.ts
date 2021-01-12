import { Router } from 'express';

import CarController from '../controllers/CarController';

const router = Router();

router
    .get('/api/cars/findAll', CarController.index)
    .get('/api/cars/:car_id/find', CarController.findOne)
    .post('/api/cars/create', CarController.create)
    .delete('/api/cars/:car_id/delete', CarController.delete);

export default router;