import { Router } from "express";

const authRouter = Router();

authRouter.get('/sign-up',(req,res)=>{
    res.json({message:"Hello there"})
})

export default authRouter;