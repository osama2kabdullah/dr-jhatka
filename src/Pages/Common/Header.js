import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between mx-32 py-2'>
            <img src="" alt="logo" />
            <nav>
                <Link to='/'>Home</Link>
            </nav>
        </div>
    );
};

export default Header;