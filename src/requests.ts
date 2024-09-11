import { app } from "./server";

export const requests = () => {
    app.get("/", async () => {
        return "Você está na raiz do servidor";
    })
    app.get("/hello-world", async () => {
        return 'Olá mundo';
    })
}