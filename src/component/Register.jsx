import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        image: '',
    };

    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(formData);
        // Add logic to send formData to an API or perform actions
        
        setFormData(initialState); // Reset form data
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
            />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleChange}
            />
            <input
                type="text"
                name="image"
                placeholder="Image URL"
                required
                value={formData.image}
                onChange={handleChange}
            />
            <button type="submit">Register</button>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </form>
    );
};

export default Register;
