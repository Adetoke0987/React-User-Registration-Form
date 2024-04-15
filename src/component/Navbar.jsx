import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/settings">Settings</Link>
            </div>
            <div>
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/"> 
                <button>Logout</button>
                </Link>
                <img src="avatar.jpg" alt="Avatar" className="avatar" />
            </div>
        </nav>
    );
};

export default Navbar;
