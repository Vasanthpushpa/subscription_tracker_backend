import { Router } from "express";

const subcriptionRouter = Router();

subcriptionRouter.get('/',(req,res)=>{res.send({title:"Get all Subscriptions"})});

subcriptionRouter.get('/:id',(req,res)=>{res.send({title:"Get Subscription Deatails"})});


subcriptionRouter.post('/',(req,res)=>{res.send({title:"CREATE Subscription"})});

subcriptionRouter.put('/:id',(req,res)=>{res.send({title:"UPDATE a Subscription"})});

subcriptionRouter.delete('/:id',(req,res)=>{res.send({title:"DELETE a Subscription"})});

subcriptionRouter.get('/user/:id',(req,res)=>{res.send({title:"GET all user Subscriptions"})});


subcriptionRouter.put('/:id/cancel',(req,res)=>{res.send({title:"CANCEL Subscription"})});

subcriptionRouter.get('/upcoming-renewals',(req,res)=>{res.send({title:"GET upcoming renewals"})});

export default subcriptionRouter;