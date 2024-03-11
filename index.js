import { Application } from "https://deno.land/x/oak@14.2.0/mod.ts";
import usersRoutes from './routes/users_routes.js';


const app = new Application();

app.use(usersRoutes.routes())

app.listen(3000, () =>{
    console.log('server is running')
})


await app.listen({ port: 8000 });