import pg from 'pg';

export const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "SoftwareTestingRobot",
    password: "123456",
    port: 5432
});

db.connect();