import React, { Component } from 'react';
import axios from "axios";

class App extends Component {
    constructor(props) 
    {
        super(props);
        this.state =
        {
            email: '',
            password: '',
            error: '',
            mensaje: '',
        };
    }

    cambios = (escritura) => 
    {
        this.setState({ [escritura.target.name]: escritura.target.value });
    };

    boton_login = async (e) => 
    {
        e.preventDefault();
        const { email, password } = this.state;

        try {
            const response = await axios.post('http://localhost:3001/api/login', { email, password });
            const token = response.data.token;
            alert(`Token: ${token}`);
            this.setState({ mensaje: 'Login successful!', error: '' });
        } catch (error) 
        {
            if (error.response) 
            {
                const status = error.response.status; 
                const errorMessage = error.response.data.message || 'Error trying to login';
                this.setState({ error: `${errorMessage} (Status: ${status})` });
            } else 
            {
                
                this.setState({ error: 'Network error or server not responding' });
            }
        }
    };

    boton_registrarse = async (e) => 
    {
        e.preventDefault();
        const { email, password } = this.state;

        try 
        {
            const response = await axios.post('http://localhost:3001/api/register', { email, password });
            this.setState({ mensaje: 'Successfully registered!', error: '' });
        } catch (error) 
        {
            this.setState({ error: error.response ? error.response.data.message : 'Error trying to register', mensaje: '' });
        }
    };

    render() {
        const { error, mensaje } = this.state;
        return (
            <div className="Login">
                {/* mensajes de éxito o error */}
                {error && <p style={{ color: 'red' }}>{error}</p>} 
                {mensaje && <p style={{ color: 'green' }}>{mensaje}</p>}

                <div>
                    {/* email */}
                    <label>
                        Enter you email :
                        <input
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.cambios}
                            required
                        />
                    </label>
                </div>
                <div>
                    {/* passsword */}
                    <label>
                        Enter you password:
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.cambios}
                            required
                        />
                    </label>
                </div>
                {/* login */}
                <button onClick={this.boton_login}>Login</button>
                {/* register */}
                <button onClick={this.boton_registrarse}>Register</button>
            </div>
        );
    }
}

export default App;
