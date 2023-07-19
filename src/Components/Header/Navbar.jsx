import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/SVGs/Logo_Img';
import ArrowSVG from '../../assets/SVGs/ArrowSVG';
const Navbar = () => {
    return (
        <React.Fragment>
            <div className='h-16 md:h-20 flex justify-between items-center'>
                {/* --logo-- */}
                <div className='shrink-0 mr-4'>
                    <Link to='/' className='block'>
                        <Logo />
                    </Link>
                </div>
                {/* Site Navigation */}
                <nav className='flex grow'>
                    <ul className='flex justify-end items-center flex-wrap grow'>
                        <li className='ml-3'>
                            <Link
                                to='apply'
                                className='inline-flex justify-center whitespace-nowrap items-center bg-slate-900 text-slate-100 shadow-sm px-4 py-2 rounded-full font-medium text-base hover:transition-transform '
                            >
                                Get your card
                                <span className='transition-transform hover:translate-x-0.5 duration-150 ease-in-out ml-2 text-sky-400'>
                                    <ArrowSVG />
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </React.Fragment>
    );
};

export default Navbar;
