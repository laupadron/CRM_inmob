import { Client } from "https://deno.land/x/mysql@v2.12.1/mod.ts";



const databaseConfig = {
    host: Deno.env.get("DB_HOST") || "127.0.0.1",
    port: parseInt(Deno.env.get("DB_PORT") || "3306"),
    user: Deno.env.get("DB_USER") || "root",
    password: Deno.env.get("DB_PASSWORD") || "",
    database: Deno.env.get("DB_DATABASE") || "crm_inmob",
  };

const client = await new Client().connect(
    databaseConfig
//     {
//     hostname:'127.0.0.1',
//     username: 'root',
//     db: 'crm_inmob',
//     password: ''
// }
);

export default client;