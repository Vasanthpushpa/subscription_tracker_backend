import aj from "../config/arcjet.js";

const arcjetMiddleware= async(req, res , next)=>{
    try{
        const decision = await aj.protect(req);

        if(decision.isDenied()){
            if(decision.reason.isRateLimit()) return res.status(429).json({message:'Rate Limit exceeded'});
            if(decision.isBot()) return res.status(403).json({message:'Bot Detected'})

            return res.status(403).json({message:'Access Denied'})
        }

        next();

    }catch(error){
        console.log(`Arcject Middleware error ${error}`);
        next(error);
    }
}

export default arcjetMiddleware;