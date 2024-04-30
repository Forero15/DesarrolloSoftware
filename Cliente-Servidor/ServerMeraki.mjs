import express, { json } from 'express';
import LoginController from './features/usuarios/api/v1/Login-Controller.mjs';

const app = express();

// Middleware para devolver responses como JSON
app.use(json());

// Routes
const LoginApiController = new LoginController();
app.use('/api/', LoginApiController.getRouter());

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});