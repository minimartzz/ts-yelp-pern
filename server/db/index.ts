import { Pool } from "pg";

// interface IPostgresLogin {
// 	user: string;
// 	host: string;
// 	database: string;
// 	password: string;
// 	port: number;
// }

// const login: IPostgresLogin = {
// 	user: process.env.PGUSER,
// 	host: process.env.PGHOST,
// 	database: process.env.PGDATABASE,
// 	password: process.env.PGPASSWORD,
// 	port: process.env.PGPORT,
// };

const pool = new Pool();

export default {
	query: (text: string, params?: any[]) => pool.query(text, params),
};
