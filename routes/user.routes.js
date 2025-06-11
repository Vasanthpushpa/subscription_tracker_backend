import { Router } from "express";

const userRouter = Router();

userRouter.get("/",(req,res)=>{res.send({title:" Gets all users"})})

userRouter.get("/:id",(req,res)=>{ res.send(`Get user with id ${req.params.id}`)})

userRouter.post("/",(req,res)=>{res.send({title:" CREATE New User"})})

userRouter.put("/:id",(req,res)=>{ res.send(`UPDATE user`)})

userRouter.delete("/:id",(req,res)=>{ res.send(`DELETE user`)})

export default userRouter;