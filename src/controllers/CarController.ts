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

    async create(req: any, res: Response) {
        try {
            const { brand, model, name, fabrication_date, price, color } = req.body;

            await knex('cars').insert({
                brand,
                model,
                name,
                fabrication_date,
                price,
                color
            });

            return res.send();
        } catch (error) {
            console.log(error);
        }
    }

    async findOne(req: Request, res: Response) {
        try {
            const { car_id } = req.params;

            const car = await knex('cars').where('id', car_id).first();

            if (!car) return res.status(404).send({ error: 'car not found' });

            return res.json(car);
        } catch (error) {
            console.log(error);
        }
    }

    async delete(req: any, res: Response) {
        try {
            const { car_id } = req.params;

            const car = await knex('cars').where('id', car_id).first();

            if (!car) return res.status(404).send({ error: 'car not found' });

            await knex('cars').where('id', car.id).del();

            return res.sendStatus(200);
        } catch (error) {
            console.log(error);
        }
    }
}

export default new CarController();