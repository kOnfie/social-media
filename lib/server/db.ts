import { Pool, Query, QueryResult, QueryResultRow } from "pg";

interface DatabaseConfig {
  user?: string;
  host?: string;
  database?: string;
  password?: string;
  port?: number;
  max?: number;
  min?: number;
  idleTimeoutMillis?: number;
  connectionTimeoutMillis?: number;
}

type QueryParams = (string | number | boolean | null | Date | Buffer)[];

declare global {
  var pgPool: Pool | undefined;
}

let pool: Pool;

if (!globalThis.pgPool) {
  const config: DatabaseConfig = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
    max: 10,
    min: 2,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  };

  globalThis.pgPool = new Pool(config);
}

pool = globalThis.pgPool;

export async function query<T extends QueryResultRow = any>(
  text: string,
  params?: QueryParams
): Promise<QueryResult<T>> {
  const start = Date.now();

  try {
    const res = await pool.query<T>(text, params);
    const duration = Date.now() - start;

    console.log("executed query", {
      text: text.slice(100) + (text.length > 100 ? "..." : ""),
      duration,
      rows: res.rowCount,
    });

    return res;
  } catch (error) {
    console.error("Error executing query", { text, error });
    throw error;
  }
}

export default pool;
