

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        image: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(formData);
        
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            image: '',
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
            /> */}
            {/* <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
            /> */}
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
            {/* <input
                type="text"
                name="image"
                placeholder="Image URL"
                required
                value={formData.image}
                onChange={handleChange}
            /> */}
            <button type="submit">Login</button>

            <span>
                Create an account with us <Link to={'/Register'}>Sign up</Link>
            </span>
        </form>
    );
};

export default LoginForm;
