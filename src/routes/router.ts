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
    .get('/users/findAll', UserController.index)
    //Users
    .post('/cars/create', CarController.create)

export default router;