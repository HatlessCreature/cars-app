import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from '../services/AuthService';


export default function AppLogin() {

    const history = useHistory();
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await AuthService.login(credentials);
        history.push('/cars');

    };
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        required
                        type="email"
                        placeholder="Email"
                        value={credentials.email}
                        onChange={({ target }) =>
                            setCredentials({ ...credentials, email: target.value })
                        }
                    />
                </div>
                <div>
                    <input
                        required
                        type="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={({ target }) =>
                            setCredentials({ ...credentials, password: target.value })
                        }
                    />
                </div>

                <button>Login</button>
            </form>
        </div>
    )
}