// import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
import {requests} from "./requests";

export const app = fastify();
// export const prisma = new PrismaClient();

requests();

app.listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3333
}).then(() => {
    console.log('Server is running');
})
