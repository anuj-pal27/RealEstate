import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'

const Signup = async (req,res)=>{
    try{
        const {username,password,email} = req.body;
        const hashedPassword = bcryptjs.hash( )
        const existingUser = await User.findOne({email:email});
        if(existingUser){
            return res.json({message:"User already exists"});
        }
        const user = await User.create({email,password,username});
        res.status(201).json({message:'User created successfully'})
        
    }
    catch(err){
        res.status(500).json(err.message)
    }
}
export default Signup;