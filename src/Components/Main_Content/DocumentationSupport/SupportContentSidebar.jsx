import React from 'react';
import FirstLevelList from './List/FirstLevelList';

const SupportContentSidebar = ({showSidebar}) => {
    return (
        <React.Fragment>
            {/* Aside - Sidebar */}
            <aside
                className={`md:ml-0 fixed top-0 bottom-0 left-0  z-10 h-screen w-64 overflow-y-auto  bg-white border-r border-slate-200 px-4 sm:px-6 md:pr-8  md:left-auto md:shrink-0 md:!block`}
                style={{
                    display: `${showSidebar ? 'block' : 'none'}`,
                }}
                id='sidebar'
            >
                <div className='pb-12 pt-28 md:pt-36 md:pb-16'>
                    <h3 className=' text-slate-900 text-lg mb-4 font-bold'>
                        Popular topics
                    </h3>
                    {/* Documentation's Nav */}
                    <nav className='md:block'>
                        <ul className='space-y-2'>
                            <FirstLevelList />
                        </ul>
                    </nav>
                </div>
            </aside>
        </React.Fragment>
    );
};

export default SupportContentSidebar;
