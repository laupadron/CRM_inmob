// db.ts
import { Pool } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

const databaseUrl = Deno.env.get("DATABASE_URL")!;
const pool = new Pool(databaseUrl, 3, true);

export default pool;



