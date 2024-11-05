import Usuario from '../modelo/usuario.js'; 
import jwt from 'jsonwebtoken';

// Controlador para registrar un nuevo usuario
const registrar_usuario = async (req, res) => 
{
    const { email, password } = req.body; 
    try {
        const nuevoUsuario = new Usuario({ email, password });
        await nuevoUsuario.save();
        res.status(201).send('User successfully created!');
    } catch (error) 
    {
        console.error('Error number', error);
        res.status(500).send('Ops ! Something went wrong');
    }
};

// Controlador para autenticar un usuario
const login_user = async (req, res) => 
{
    const { email, password } = req.body;
    try {
        const user = await Usuario.findOne({ email });
        if (user && user.password === password) 
        {
            // Generar token
            const token = jwt.sign({ id: user._id, usuario: user.usuario }, process.env.JWT_SECRET);
            return res.status(200).json({ token });
        } else 
        {
            return res.status(401).json({ message: 'You have not been registered' });
        }
    } catch (error) 
    {
        console.error('Error number', error);
        return res.status(500).json({ message: 'Ops ! Something went wrong' });
    }
};

export { registrar_usuario, login_user }; 
