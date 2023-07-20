import React from 'react';
import Navbar from './Navbar';
// import styles from './Header.module.css';

const Header = () => {
    return (
        <React.Fragment>
            <header className='w-full absolute z-30'>
                <div className='max-w-6xl px-4 md:px-6 mx-auto'>
                    <Navbar />
                </div>
            </header>
        </React.Fragment>
    );
};

export default Header;
