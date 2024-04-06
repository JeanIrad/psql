import { Pool } from "pg";
export const pool = new Pool({
    user: 'jeandedieuiradukunda',
    host: 'localhost',
    database: 'students',
    password:'',
    port: 5432
})