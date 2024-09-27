import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import { router as productsRoutes } from "./routes/products-routes.js";
import { router as featuresRoutes } from "./routes/features-routes.js";
import { router as testsRoutes } from "./routes/tests-routes.js";
import { router as testsScenariosRoutes } from "./routes/tests-scenarios-routes.js";
import { HttpError } from "./models/http-error.js";

const app = express();
app.use(bodyParser.json());

// Configure CORS middleware first
app.use(cors());

app.options('/api/testsScenarios', (req, res) => {
    // Set appropriate CORS headers for the preflight request
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.status(200).end();
});

// Now define your routes
app.use('/api/products', productsRoutes);
app.use('/api/features', featuresRoutes);
app.use('/api/tests', testsRoutes);
app.use('/api/testsScenarios', testsScenariosRoutes);

// Handle 404 route not found
app.use((req, res, next) => {
    return next(new HttpError('Route not found', 404));
});

// Error handling middleware
app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || 'An unknown error occurred' });
});

app.listen(3000);