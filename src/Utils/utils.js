
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'


dotenv.config();
const jwt_secret= process.env.JWT_SECRET;

export const generateToken = (payload)=>{
    return jwt.sign(payload, jwt_secret, {expiresIn: '1d'});

}

export const verifyToken =(payload)=>{
    return jwt.verify(payload, jwt_secret);
}