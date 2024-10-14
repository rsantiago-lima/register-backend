import mysql from "mysql";
import "dotenv/config";

const host = process.env.HOST;
const user = process.env.USER;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;

export const db = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database,
});
