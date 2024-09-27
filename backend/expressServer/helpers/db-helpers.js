import { db } from "../db.js";

export const queryDatabase = async (query) => {
    return await new Promise((resolve, reject) => {
        db.query(query, (err, res) => {
            if (err) {
                console.error(`Error executing query: ${query}`, err.stack);
                reject(err);
            } else {
                resolve(res.rows);
            }
        });
    });
}