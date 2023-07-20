import React, {useState} from 'react';
import SupportIllustration from '../../../assets/SVGs/support-illustration.svg';
import SupportContentSidebar from './SupportContentSidebar';
import SupportPageArticle from './SupportPageArticle';

const SupportMainContentSection = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const openSidebar = () => {
        setShowSidebar(true);
    };
    const closeSidebar = () => {
        setShowSidebar(false);
    };

    return (
        <React.Fragment>
            <section className='relative'>
                {/* Illustration */}
                <div className=' -translate-x-1/2 -z-10 absolute top-0 left-1/2 pointer-events-none'>
                    <img
                        className='max-w-none'
                        src={SupportIllustration}
                        alt='ApplyMainContentSection'
                        aria-hidden='true'
                        width={1440}
                        height={286}
                    />
                </div>
                <div className='max-w-6xl mx-auto px-4 md:px-6'>
                    {/* Main Content */}
                    <div className='md:flex md:justify-between'>
                        {/* Backdrop */}
                        <div
                            onClick={closeSidebar}
                            className=' bg-white bg-opacity-75 fixed top-0 right-0 bottom-0 left-0 z-10 transition-opacity'
                            style={{
                                display: `${showSidebar ? 'block' : 'none'}`,
                            }}
                            aria-hidden='true'
                        ></div>
                        {/* Aside - Sidebar */}
                        <SupportContentSidebar showSidebar={showSidebar} />

                        {/* Page Container */}
                        <SupportPageArticle sidebarToggler={openSidebar} />
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default SupportMainContentSection;
