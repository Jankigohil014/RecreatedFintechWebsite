import React from 'react';
import Header from './Header/Header';
import Main from './Main_Content/Main';
import SiteFooter from './Footer/SiteFooter';

const Home = () => {
    return (
        <React.Fragment>
            {/* Page Wrapper */}
            <div className='flex flex-col overflow-hidden min-h-screen'>
                {/* Site Header */}
                <Header />
                {/* Page Container */}
                <Main />
                {/* Site Footer */}
                <SiteFooter />
            </div>
        </React.Fragment>
    );
};

export default Home;
