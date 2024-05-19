import 'dotenv/config';

import express, { json } from 'express';
import LoginController from './features/usuarios/api/v1/LoginController.mjs';

const app = express();

// Middleware para devolver responses como JSON
app.use(json());

// Routes
const LoginApiController = new LoginController();
app.use('/api/', LoginApiController.getRouter());

// Start the server
const PORT = process.env.PORT || 3000;

console.log(process.env.MYSQL_DATABASE_URL);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});