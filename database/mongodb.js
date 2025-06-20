import mongoose from "mongoose";

import { DB_URI, NODE_ENV } from "../config/env.js";

if(!DB_URI){
    throw new Error("PLease define the MONGDB_URI enivirnment variable inside .env<develeopment/production>");
    
}

const connectToDatabase = async()=>{
    try{
        await mongoose.connect(DB_URI);
        console.log(`connected to database in ${NODE_ENV} mode`);


    }catch(error){
        console.log("Error connecting to database",error)
        // eslint-disable-next-line no-undef
        process.exit(1);
    }
}
export default connectToDatabase;


