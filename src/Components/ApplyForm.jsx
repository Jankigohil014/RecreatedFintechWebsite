import React from 'react';
import ApplyFormHeader from './Header/ApplyFormHeader';
import ApplyMainContentSection from './Main_Content/ApplyForm/ApplyMainContentSection';

const ApplyForm = () => {
    return (
        <React.Fragment>
            {/* Page Wrapper */}
            <div className='flex flex-col overflow-hidden min-h-screen'>
                {/* Site Header */}
                <ApplyFormHeader />
                {/* Page Main Cotent */}
                <main className='grow'>
                    <ApplyMainContentSection />
                </main>
            </div>
        </React.Fragment>
    );
};

export default ApplyForm;
