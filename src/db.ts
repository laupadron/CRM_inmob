import { Client } from "https://deno.land/x/mysql@v2.12.1/mod.ts";


const client = await new Client().connect({
    hostname: Deno.env.get("DB_HOST") || '127.0.0.1',
    port: parseInt(Deno.env.get("DB_PORT") || '3306'),
    username: Deno.env.get("DB_USER") || 'root',
    password: Deno.env.get("DB_PASSWORD") || '',
    db: Deno.env.get("DB_DATABASE") || 'crm_inmob',
});


// const client = await new Client().connect(
    
//     {
//     hostname:'127.0.0.1',
//     username: 'root',
//     db: 'crm_inmob',
//     password: ''
// }
// );

export default client;