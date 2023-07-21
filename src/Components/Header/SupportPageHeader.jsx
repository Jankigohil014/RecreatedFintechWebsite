import React from 'react';
import {Link} from 'react-router-dom';
import ApplyPageLogo from '../../assets/SVGs/applyPage_logo.svg';

const SupportPageHeader = () => {
    return (
        <React.Fragment>
            <header className='w-full fixed z-30 border-b border-slate-200 bg-white'>
                <div className='max-w-6xl px-4 md:px-6 mx-auto'>
                    <div className='h-16 md:h-20 flex justify-between items-center'>
                        {/* --logo-- */}
                        <div className='shrink-0 mr-4'>
                            <Link to='/' className='flex items-center'>
                                <img src={ApplyPageLogo} alt='ApplyPageLogo' />
                                <span className='ml-4 text-slate-400 font-medium'>
                                    Support System
                                </span>
                            </Link>
                        </div>
                        {/* Site Navigation */}
                        <nav className='flex grow'>
                            <ul className='flex justify-end items-center flex-wrap grow'>
                                <li className='ml-3'>
                                    <Link
                                        to=''
                                        className='inline-flex justify-center whitespace-nowrap items-center bg-slate-800 hover:bg-slate-900 text-slate-100 shadow-sm px-4 py-2 rounded-full font-medium text-base hover:transition-transform '
                                    >
                                        Get in touch
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
};

export default SupportPageHeader;
