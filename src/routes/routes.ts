import { Router } from "https://deno.land/x/oak@14.2.0/mod.ts";
import { getAllUsers } from "../handlers/getAllUsers.ts";
import { welcome } from "../handlers/welcome.ts";

const router = new Router();

router
.get('/', welcome )
  .get("/users", getAllUsers);

export default router;
