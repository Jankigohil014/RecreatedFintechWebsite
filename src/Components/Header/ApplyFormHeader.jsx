import React from 'react';
import {Link} from 'react-router-dom';
import ApplyPageLogo from '../../assets/SVGs/applyPage_logo.svg';

const ApplyFormHeader = () => {
    return (
        <React.Fragment>
            <header className='w-full absolute z-30'>
                <div className='max-w-6xl px-4 md:px-6 mx-auto'>
                    <div className='h-16 md:h-20 flex justify-between items-center'>
                        {/* --logo-- */}
                        <div className='shrink-0 mr-4'>
                            <Link to='/' className='block'>
                                <img src={ApplyPageLogo} alt='ApplyPageLogo' />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
};

export default ApplyFormHeader;
