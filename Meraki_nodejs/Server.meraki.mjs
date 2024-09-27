import 'dotenv/config';

import express, { json } from 'express';
import LoginController from './features/usuario/api/v1/LoginController.mjs';
import TonerController from './features/toner/api/v1/TonerController.mjs';
import EmpresaController from './features/empresa/api/v1/EmpresaController.mjs';
const app = express();

// Middleware para devolver responses como JSON
app.use(json());

// Routes
const LoginApiController = new LoginController();
app.use('/api/', LoginApiController.getRouter());

const TonerApiController = new TonerController();
app.use('/api/', TonerApiController.getRouter());

const EmpresaApiController = new EmpresaController();
app.use('/api/', EmpresaApiController.getRouter());
// Start the server

const PORT = process.env.PORT || 3000;

console.log(process.env.MYSQL_DATABASE_URL);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});