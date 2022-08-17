
import jwt from 'jsonwebtoken';

export const createToken = (data, expeir = '7d') => {

    return jwt.sign(data, process.env.TOKEN_SECRET, {
        expiresIn : expeir
    });

};