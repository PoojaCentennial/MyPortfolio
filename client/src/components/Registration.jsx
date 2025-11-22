import react, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { create } from '../lib/api-user';

const Registration = ({ setUser }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    /*const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
              username: formData.username || undefined,
              email: formData.email || undefined,
              password: fromData.password || undefined,
            };
        
            create(user).then((data) => {
              if (data.error) {
                setValues({ ...values, error: data.error });
              } else {
                setOpen(true);
              }
            });
        console.log('Registration Data:', formData);
        setIsSubmitted(true);
        // Clear form data after submission
        setFormData({
            username: '',
            email: '',
            password: ''
        });
    }*/
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })

            if (!response.ok) {
                throw new Error(response.message || 'Registration failed');
            }

            const data = await response.json();
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', data.user.name);
            if (setUser) {
                setUser({ username: data.user.username });
            }
            navigate('/'); 
            setIsSubmitted(true);
            setFormData({
                username: '',
                email: '',
                password: ''
            });

        } catch (error) {
            setError(error.message);
        }
    }


    return (
        <section className="general-form-container">
            <h2>Register</h2>
            <form className="general-form" onSubmit={handleSubmit}>
                {error && (
                    <div className="error-message">
                        <p>{error}</p>
                    </div>)}
                <div className="form-group">
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
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
                <button type="submit">Register</button>
                {isSubmitted && <p className="success-message">Registration successful!</p>}
            </form>
        </section>
    );
}

export default Registration;