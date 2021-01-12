import jwt from 'jsonwebtoken';

export default {
    generateToken(params = {}) {
        return jwt.sign(params, 'S3cr3t', {
            expiresIn: 86400
        })
    }
}