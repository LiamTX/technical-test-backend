import { Request, Response } from 'express';
import knex from '../database/connection';

class CarController {
    //Listagem de todos os carros
    async index(req: Request, res: Response) {
        try {
            const cars = await knex('cars');

            return res.json(cars);
        } catch (error) {
            console.log(error)
        }
    }

    /*
        Cadastro de carros, deve ser enviado junto ao corpo da requisição um json
        com as seguintes informações do carro -> brand: string, model: string, name: string, 
        fabrication_date: string, price: float, color: string
    */
    async create(req: Request, res: Response) {
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

    /*
        Ache um carro em especifico, deve ser enviado junto aos params da requisição o 
        id do carro que deseja achar
    */
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

    /*
        Edição das informações de um carro, deve ser enviado junto ao corpo da requisição um json
        com as seguintes informações do carro -> id: integer, brand: string, model: string, 
        name: string, fabrication_date: string, price: float, color: string
    */
    async edit(req: Request, res: Response) {
        try {
            const { id, brand, model, name, fabrication_date, price, color } = req.body;

            const car = await knex('cars').where('id', id).first();

            if (!car) return res.status(404).send({ error: 'not found' });

            await knex('cars')
                .where('id', car.id)
                .update({
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

    /*
        Delete um carro, deve ser enviado junto aos params da requisição o id do carro
        que deseja deletar
    */
    async delete(req: Request, res: Response) {
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