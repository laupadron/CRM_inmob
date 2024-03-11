// db.ts
import { Pool } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

// Obtén la cadena de conexión de la variable de entorno "DATABASE_URL"
const databaseUrl = Deno.env.get("DATABASE_URL");

// Verifica si la variable de entorno está definida
if (!databaseUrl) {
  throw new Error("La variable de entorno DATABASE_URL no está definida.");
}

// Crea el pool de conexión a la base de datos
const pool = new Pool(databaseUrl, 3, true);

export default pool;



