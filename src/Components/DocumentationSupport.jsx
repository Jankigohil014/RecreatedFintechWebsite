import React from 'react';
import SupportPageHeader from './Header/SupportPageHeader';
import SupportMainContentSection from './Main_Content/DocumentationSupport/SupportMainContentSection';

const DocumentationSupport = () => {
    return (
        <React.Fragment>
            {/* Page Wrapper */}
            <div className='flex flex-col overflow-hidden min-h-screen'>
                {/* Support Page Header */}
                <SupportPageHeader />

                {/* Support Page Main Cotent */}
                <main className='grow'>
                    <SupportMainContentSection />
                </main>
            </div>
        </React.Fragment>
    );
};

export default DocumentationSupport;
