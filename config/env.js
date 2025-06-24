import { config } from "dotenv";

// eslint-disable-next-line no-undef
config({path:`.env.${process.env.NODE_ENV || "development"}.local`})

 
export const {
    PORT,
    NODE_ENV,
    DB_URI,
    JWT_SECRET,
    JWT_EXPIRES_IN,
    ARCJET_ENV,
    ARCJET_KEY,
    QSTASH_TOKEN,QSTASH_URL,
    SERVER_URL
 // eslint-disable-next-line no-undef
 } = process.env;


 // "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODQ5NmU5YWM3MGFiN2I5YzY0MDA1MjEiLCJpYXQiOjE3NDk2NDI5MDYsImV4cCI6MTc0OTcyOTMwNn0.SOZooedz4cvuV5I5cOcVN-2fWMoDSSlunBULK8pMZkc",
 // "_id": "68496e9ac70ab7b9c6400521",