import { Request, Response } from 'express';
import knex from '../database/connection';
import bcrypt from 'bcrypt';
import token from '../middlewares/Token';

class UserController {
    async index(req: Request, res: Response) {
        try {
            const users = await knex('users');

            return res.json(users);
        } catch (error) {
            console.log(error)
        }
    }

    async auth(req: Request, res: Response) {
        try {
            const { nickname, password } = req.body;

            const user = await knex('users').where('nickname', nickname).first();

            if (!user) return res.status(404).send({ error: 'user not found' });

            if (!await bcrypt.compare(password, user.password)) {
                return res.status(404).send({ error: 'unauthorized' });
            };

            return res.json({token: token.generateToken({id: user.id})});
        } catch (error) {
            console.log(error);
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { nickname, email, password } = req.body;

            const hash = await bcrypt.hash(password, 10);

            const [user] = await knex('users').insert({
                nickname,
                email,
                password: hash
            });

            console.log(user)

            return res.json({ token: token.generateToken({ id: user }) });
        } catch (error) {
            console.log(error)
        }
    }
}

export default new UserController();