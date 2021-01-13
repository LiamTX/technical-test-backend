import { Router } from 'express';

import CarController from '../controllers/CarController';

const router = Router();

router
    //Liste todos carros
    .get('/api/cars/all', CarController.index)
    //List um carro especifico
    .get('/api/cars/:car_id/find', CarController.findOne)
    //Cadastre um carro
    .post('/api/cars/create', CarController.create)
    //Delete um carro
    .delete('/api/cars/:car_id/delete', CarController.delete)
    //Atualize um carro
    .put('/api/cars/edit', CarController.edit);

export default router;