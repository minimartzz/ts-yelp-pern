"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
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
const pool = new pg_1.Pool();
exports.default = {
    query: (text, params) => pool.query(text, params),
};
