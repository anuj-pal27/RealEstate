import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'

const Signup = async (req,res,next)=>{
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
export default Signup;