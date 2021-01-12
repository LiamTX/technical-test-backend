import { Request, Response } from 'express';
import knex from '../database/connection';
import bcrypt from 'bcrypt';

class RoomsController {
    async index(req: Request, res: Response) {
        try {
            const users = knex('users');

            return res.json(users);
        } catch (error) {
            console.log(error)
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { nickname, email, password } = req.body;

            const hash = await bcrypt.hash(password, 10);

            const user = await knex('users').insert({
                nickname,
                email,
                password: hash
            });

            return res.sendStatus(200);
        } catch (error) {
            console.log(error)
        }
    }
}

export default new RoomsController();