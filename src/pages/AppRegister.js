import { useState } from "react";
import { useHistory } from 'react-router-dom';
import AuthService from "../services/AuthService";

export default function AppRegister() {
    const history = useHistory();
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await AuthService.register(userData);
        history.push('/cars');

    };
    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        required
                        placeholder="Name"
                        value={userData.name}
                        onChange={({ target }) =>
                            setUserData({ ...userData, name: target.value })
                        }
                    />
                </div>
                <div>
                    <input
                        required
                        type="email"
                        placeholder="Email"
                        value={userData.email}
                        onChange={({ target }) =>
                            setUserData({ ...userData, email: target.value })
                        }
                    />
                </div>
                <div>
                    <input
                        required
                        type="password"
                        placeholder="Password"
                        value={userData.password}
                        onChange={({ target }) =>
                            setUserData({ ...userData, password: target.value })
                        }
                    />
                </div>
                <div>
                    <input
                        required
                        type="password"
                        placeholder="Confirm password"
                        value={userData.password_confirmation}
                        onChange={({ target }) =>
                            setUserData({ ...userData, password_confirmation: target.value })
                        }
                    />
                </div>

                <button>Register</button>
            </form>
        </div>
    );
}