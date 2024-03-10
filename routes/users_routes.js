import {  Router } from "https://deno.land/x/oak@14.2.0/mod.ts";

const router = new Router();

router.get('/users', getUsers, (ctx)=>{
    ctx.response.body = "Hello users!";
  });

export default router;