

import authservice from "../service/AuthService.js";
import { generateToken, verifyToken } from "../Utils/utils.js";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";


class AuthController{
    async register(req, res){
        const {name,username,email,password} = req.body;
        console.log({name,username,email,password})
        if(!name || !username || !email || !password){
            return res.status(400).json({message:"All fields are required"});
        }
        const userExist = await authservice.findUserByEmail(email);
        if(userExist){
            return res.status(400).json({message:"User already exist"});
        }
        const user = await authservice.createUser({name,username,email,password});
       
        const token = await generateToken({name, username, email, password});
            
        
        if(!user){
            return res.status(400).json({message:"User not created"});
        }
        res.cookie('token', token,{
            httpOnly: true,
            maxAge: 60 * 60 * 1000
        })
         res.status(201).json({message:"User created successfully", success: true,
            user: {
                name: user?.name,
                username: user?.username,
                email: user?.email,
                password: user?.password,
                
            },
            
        });


    }
    async getApiuser(req, res){
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({message:"Unauthorized"});
        }
        const user = await verifyToken(token, process.env.JWT_SECRET);
        if(!user){
            return res.status(401).json({message:"Unauthorized"});
        }
        res.status(200).json({message:"User found", success: true,
            user: {
                name: user.name,
                username: user.username,
                email: user.email,
                password: user.password,
                
            },
            
        });
        
    }

    async logout(req, res){
        res.clearCookie('token');
        res.status(200).json({message:"User logged out successfully", success: true});
    }
    async login(req,res){
        const {email,password} = req.body;
        console.log(email, password)
        if(!email || !password){
            return res.status(400).json({message:"All fields are required"});
        }
       
        const user = await authservice.findUserByEmail(email);
        const opern_decode = await bcrypt.compare(password, user?.password);
        if(!opern_decode){
            return res.status(400).json({message:"Invalid credentials"});
        }
        if(!user){
            return res.status(400).json({message:"User not found", success: false});
        }
        const token = await generateToken({ email: user.email, password: user?.password});

        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 60 * 60 * 1000,
            secure:false,
            samsite:"lax"
        })
        res.status(200).json({message:"User logged in successfully", success: true,
            user: {
                name: user.name,
                username: user.username,
                email: user.email,
                password: user.password,
                
            },
            
        });
    }
}


const authController = new AuthController();
export default authController;