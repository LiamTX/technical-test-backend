import { Router } from 'express';
import auth from '../middlewares/Auth';

import UserController from '../controllers/UserController';
import CarController from '../controllers/CarController';

const router = Router();

//Rotas publicas <-------
router
    //Cars
    .get('/cars/findAll', CarController.index)
    //Users  
    .post('/users/create', UserController.create)
    .post('/users/auth', UserController.auth);

//Rotas privadas <-------
router.use(auth);

router
    //Cars
    .get('/cars/:car_id/find', CarController.findOne)
    .post('/cars/create', CarController.create)
    .delete('/cars/:car_id/delete', CarController.delete)
    //Users
    .get('/users/findAll', UserController.index);

export default router;