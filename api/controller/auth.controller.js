import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';
import jwt from  'jsonwebtoken'
import 'dotenv/config'

export const signup = async (req,res,next)=>{
    try{
        const {username,password,email} = req.body;
        const hashedPassword = await bcryptjs.hash(password,10);
        const existingUser = await User.findOne({email:email});
        if(existingUser){
            return res.json({message:"User already exists"});
        }
        const newUser = new User({username, email, password: hashedPassword});
        await newUser.save();
        res.status(201).json({message:'User created successfully'})
        
    }
    catch(err){
        next(err);
    }
}

export const signin = async (req,res,next)=>{
    const {email, password} = req.body;
    try{
        const validUser =await User.findOne({email});
        if(!validUser)
            return next(errorHandler(404,'User not found!'));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword) return next(errorHandler(401,'Wrong credentials'));
        const payload = {
            id:validUser._id,
            username:validUser.username,
            email:validUser.email,
        }
        const option = {
            expiresIn: '1h',
        }
        const token = jwt.sign(payload,process.env.JWT_SECRET,option);
        res.cookie('access_token',token,{httpOnly: true}).status(200).json(validUser);

    }catch(error){
        next(error);
    }
}