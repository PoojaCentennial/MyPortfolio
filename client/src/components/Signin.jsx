import react, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from '../config/api';

const Signin = ({ setUser }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_BASE_URL}/api/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })

            if (!response.ok) {
                throw new Error('Failed to login');
            }

            const data = await response.json();
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', data.user.username);
            if (setUser) {
                setUser({ username: data.user.username });
            }
            navigate('/');

        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <section className="general-form-container">
            <h2>Sign In</h2>
            <form className="general-form" onSubmit={handleSubmit}>
                {error && (
                    <div className="error-message">
                        <p>{error}</p>
                    </div>)}
                <div className="form-group">
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Sign In</button>
            </form>
            {isSubmitted && <div className="success-message">Sign In Successful!</div>}
        </section>
    );
}

export default Signin;