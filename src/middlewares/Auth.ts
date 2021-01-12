import jwt from 'jsonwebtoken';
import knex from '../database/connection';
import { Request, Response, NextFunction } from 'express';

const auth = async (req: Request, res: Response, next: NextFunction) => {
    const header = req.header('Authorization');

    if (!header) {
        return res.status(401).json({ error: 'unauthorized' });
    };

    const parts = header.split(' ');

    if (parts.length !== 2) {
        return res.status(401).json({ error: 'unauthorized' });
    };

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).json({ error: 'unauthorized' });
    };

    // jwt.verify(token, 'S3cr3t', async (err, decoded) => {
    //     if (err) return res.status(401).json({ error: 'unauthorized' });

    //     const user = await knex('users').where('nickname', decoded.nickname).first();
    //     const user = await User.findOne({ where: { email: decoded.email } });
    //     if (!user) return res.status(401).json({ error: 'unauthorized' });

    //     req.userEmail = decoded.email;
    //     return next();
    // });
}