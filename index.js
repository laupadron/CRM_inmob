import { Application } from "https://deno.land/x/oak@14.2.0/mod.ts";
import usersRoutes from './routes/users_routes.js'

const app = new Application();

app.use(usersRoutes)

app.use((ctx) => {
  ctx.response.body = "Hello World with Oak!";
});

await app.listen({ port: 8000 });