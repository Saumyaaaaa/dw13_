import { config } from "dotenv";

config();

export const password = process.env.PASSWORD;
export const email = process.env.EMAIL;
export const secretKey = process.env.SECRET_KEY;

export const port = process.env.PORT;

//  export const dbURL = `mongodb://0.0.0.0:27017/dw13 `;
export const dbURL = process.env.DB_URL;

//  export const dbURL = process.env.DB_URL
