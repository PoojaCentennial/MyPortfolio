import react, { useState } from 'react';

const ProjectForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        firstName: '',
        lastName: '',
        email: '',
        completionDate: '',
        description: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(formData)
            })

            if (!response.ok) {
                throw new Error(response.message || 'Education submission failed');
            }

            const data = await response.json();
            console.log('Education Data Submitted:', data);
            //navigate('/');
            setIsSubmitted(true);
            setFormData({
                title: '',
                firstName: '',
                lastName: '',
                email: '',
                completionDate: '',
                description: ''
            });

        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <section className="general-form-container">
            <h2>Submit a Project</h2>
            <form className="general-form" onSubmit={handleSubmit}>
                {error && (
                    <div className="error-message">
                        <p>{error}</p>
                    </div>)}
                <div className="form-group">
                    <label>
                        Project Title:
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        First Name:
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Last Name:
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
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
                        Completion Date:
                        <input
                            type="date"
                            name="completionDate"
                            value={formData.completionDate}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Project Description:
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Submit Project</button>
            </form>
            {isSubmitted && <div className="success-message">Project Submitted Successfully!</div>}
        </section>
    );
}

export default ProjectForm;