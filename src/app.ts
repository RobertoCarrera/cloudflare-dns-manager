import express from 'express';
import bodyParser from 'body-parser';
import { errorHandler } from './middlewares/errorHandler';
import { setRoutes } from './routes/dnsRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
setRoutes(app);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(errorHandler); // Middleware de manejo de errores