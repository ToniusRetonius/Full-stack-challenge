// incorporamos el buen uso de las var de entorno 
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import db_conexion from './configuraciones/mongo.js'; 
import rutas from './rutas/index.js'; 

// puerto
const port = process.env.PORT || 3000;

// declaración de app, una instacia del framework
const app = express();

// usamos cors 
app.use(cors());

// le decimos a nuestra app que esté preparada para recibir cosas tipo json
app.use(express.json());

// invocación de ruta (cuando entren a localhost/api/.....)
app.use("/api", rutas);

// inicializamos el servidor (escuchamos por el puerto definido en .env)
app.listen(port, () => console.log('Tu app está lista por el puerto ' + port));

db_conexion();
