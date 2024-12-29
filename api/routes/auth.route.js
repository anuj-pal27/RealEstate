import express from 'express' ;
const router = express.Router();
import Signup from '../controller/auth.controller.js'

router.post("/signup",Signup);

export default router;