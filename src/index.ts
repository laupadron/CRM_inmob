import { Application } from "https://deno.land/x/oak@14.2.0/mod.ts";
import router from './routes/routes.ts'
import './db.ts'

// Ejecuta el código para crear la tabla antes de iniciar la aplicación



console.log("Server is starting...");
const app = new Application();

app.use(router.routes())
app.use(router.allowedMethods());



await app.listen({ port: 8000 });