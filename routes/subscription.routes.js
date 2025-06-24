import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";

const subcriptionRouter = Router();

subcriptionRouter.get('/',(req,res)=>{res.send({title:"Get all Subscriptions"})});

subcriptionRouter.get('/:id',(req,res)=>{res.send({title:"Get Subscription Deatails"})});


subcriptionRouter.post('/',authorize,createSubscription);

subcriptionRouter.put('/:id',(req,res)=>{res.send({title:"UPDATE a Subscription"})});

subcriptionRouter.delete('/:id',(req,res)=>{res.send({title:"DELETE a Subscription"})});

subcriptionRouter.get('/user/:id',authorize,getUserSubscriptions);


subcriptionRouter.put('/:id/cancel',(req,res)=>{res.send({title:"CANCEL Subscription"})});

subcriptionRouter.get('/upcoming-renewals',(req,res)=>{res.send({title:"GET upcoming renewals"})});

export default subcriptionRouter;