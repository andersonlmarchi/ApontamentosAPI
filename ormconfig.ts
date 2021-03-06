import { ConnectionOptions } from "typeorm";
import { Appointments, User } from "./src/entities";

const config: ConnectionOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [User, Appointments],
  synchronize: true
};

export default config;
