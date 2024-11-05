import express from 'express';
const router = express.Router();
import { registrar_usuario, login_user } from '../controladores/usuario.js'; 

// Ruta para registrar un nuevo usuario
router.post('/register', registrar_usuario);

// Ruta para autenticar un usuario
router.post('/login', login_user);

export default router; 
