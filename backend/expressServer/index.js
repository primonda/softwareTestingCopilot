import express from "express";
import {db} from './db.js'; 

const app = express();

app.get('/', async (req, res) => {
    db.query("SELECT * FROM tenants", (err, response) => {
        if (err) {
          console.error("Error executing query", err.stack);
        } else {
            console.log(response.rows);
            res.send(`Hello: ${JSON.stringify(response.rows)}`)
        }
      });
});
  
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });