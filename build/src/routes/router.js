"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var CarController_1 = __importDefault(require("../controllers/CarController"));
var router = express_1.Router();
router
    //Liste todos carros
    .get('/api/cars/all', CarController_1.default.index)
    //Liste um carro especifico
    .get('/api/cars/:car_id/find', CarController_1.default.findOne)
    //Cadastre um carro
    .post('/api/cars/create', CarController_1.default.create)
    //Delete um carro
    .delete('/api/cars/:car_id/delete', CarController_1.default.delete)
    //Atualize um carro
    .put('/api/cars/edit', CarController_1.default.edit);
exports.default = router;
