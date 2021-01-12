import { Request, Response } from 'express';
import knex from '../database/connection';

class CarController {
    async index(req: Request, res: Response) {
        try {
            const cars = await knex('cars');

            return res.json(cars);
        } catch (error) {
            console.log(error)
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { brand, model, name, price, color } = req.body;

            const date = new Date();
        
            await knex('cars').insert({
                brand,
                model,
                name,
                fabrication_date: date,
                price,
                color,
                user_id: 1
            });

            return res.sendStatus(200);
        } catch (error) {
            console.log(error);
        }
    }
}

export default new CarController();