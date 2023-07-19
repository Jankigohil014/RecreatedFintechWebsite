import React from 'react';
import FooterIllustration from '../../assets/SVGs/footer-illustration.svg';
import {Link} from 'react-router-dom';
import Logo from '../../assets/SVGs/Logo_Img';

const SiteFooter = () => {
    return (
        <footer className='relative'>
            {/* BG */}
            <div
                className='bg-slate-800 -z-10 absolute top-0 bottom-0 right-0 left-0'
                aria-hidden='true'
            ></div>
            {/* Illustration */}
            <div
                className=' absolute bottom-0 left-1/2 lg:left-2/3 -translate-x-1/2 -z-10 pointer-events-none'
                aria-hidden='true'
            >
                <img
                    className='max-w-none'
                    src={FooterIllustration}
                    alt='FooterIllustration'
                    width={1940}
                    height={381}
                />
            </div>
            <div className='max-w-6xl mx-auto px-4 sm:px-6'>
                {/* Blocks */}
                <div className='grid sm:grid-cols-12  lg:grid-cols-10  gap-8 border-t-2 border-slate-700 py-8'>
                    {/* 1st Block */}
                    <div className='sm:col-span-12 lg:max-w-xs lg:col-span-2'>
                        {/* --Logo-- */}
                        <Link to='/' className='block'>
                            <Logo />
                        </Link>
                    </div>

                    {/* 2nd Block */}
                    <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
                        <h6 className='text-slate-100 font-bold text-sm/6 mb-3 tracking-wide'>
                            Essentials
                        </h6>
                        <ul className='text-sm/6 font-medium space-y-2'>
                            <li>
                                <a
                                    href='#0'
                                    className='text-slate-400 ease-in-out duration-150 hover:text-blue-500 transition'
                                >
                                    Payments
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#0'
                                    className='text-slate-400 ease-in-out duration-150 hover:text-blue-500 transition'
                                >
                                    Budgeting and analytics
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#0'
                                    className='text-slate-400 ease-in-out duration-150 hover:text-blue-500 transition'
                                >
                                    Open banking
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#0'
                                    className='text-slate-400 ease-in-out duration-150 hover:text-blue-500 transition'
                                >
                                    Pockets
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#0'
                                    className='text-slate-400 ease-in-out duration-150 hover:text-blue-500 transition'
                                >
                                    Subscriptions
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* 3rd Block */}
                    <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
                        <h6 className='text-slate-100 font-bold text-sm/6 mb-3 tracking-wide'>
                            Company
                        </h6>
                        <ul className='text-sm/6 font-medium space-y-2'>
                            <li>
                                <a
                                    href='#0'
                                    className='text-slate-400 ease-in-out duration-150 hover:text-blue-500 transition'
                                >
                                    About us
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#0'
                                    className='text-slate-400 ease-in-out duration-150 hover:text-blue-500 transition'
                                >
                                    Diversity / Inclusion
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#0'
                                    className='text-slate-400 ease-in-out duration-150 hover:text-blue-500 transition'
                                >
                                    Sustainability
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#0'
                                    className='text-slate-400 ease-in-out duration-150 hover:text-blue-500 transition'
                                >
                                    Code of conduct
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#0'
                                    className='text-slate-400 ease-in-out duration-150 hover:text-blue-500 transition'
                                >
                                    Financial statements
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* 4th Block */}
                    <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
                        <h6 className='text-slate-100 font-bold text-sm/6 mb-3 tracking-wide'>
                            LifeStyle
                        </h6>
                        <ul className='text-sm/6 font-medium space-y-2'>
                            <li>
                                <a
                                    href='#0'
                                    className='text-slate-400 ease-in-out duration-150 hover:text-blue-500 transition'
                                >
                                    International products
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#0'
                                    className='text-slate-400 ease-in-out duration-150 hover:text-blue-500 transition'
                                >
                                    Currency exchange
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#0'
                                    className='text-slate-400 ease-in-out duration-150 hover:text-blue-500 transition'
                                >
                                    Lounge & Smart delay
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* 5th Block */}
                    <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
                        <h6 className='text-slate-100 font-bold text-sm/6 mb-3 tracking-wide'>
                            Contact us
                        </h6>
                        <ul className='text-sm/6 font-medium space-y-2'>
                            <li>
                                <a
                                    href='#0'
                                    className='text-slate-400 ease-in-out duration-150 hover:text-blue-500 transition'
                                >
                                    Send us an email
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#0'
                                    className='text-slate-400 ease-in-out duration-150 hover:text-blue-500 transition'
                                >
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#0'
                                    className='text-slate-400 ease-in-out duration-150 hover:text-blue-500 transition'
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#0'
                                    className='text-slate-400 ease-in-out duration-150 hover:text-blue-500 transition'
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#0'
                                    className='text-slate-400 ease-in-out duration-150 hover:text-blue-500 transition'
                                >
                                    Tik Tok
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Text Area */}
                <div className='pb-4 md:pb-8'>
                    <div className='text-slate-500 text-xs/4 text-justify'>
                        If you would like to find out more about which entity
                        you receive services from please click &nbsp;
                        <a
                            href='#0'
                            className='text-slate-400 underline font-medium ease-in-out duration-150 hover:text-blue-500 transition '
                        >
                            here
                        </a>
                        If you have any other questions, please reach out to us
                        via the in-app chat. Custom Bank is a bank established
                        in the Republic of Ireland. Custom Bank is licensed by
                        the European Central Bank and regulated by the Bank of
                        Ireland. Cusom Bank provides credit, payment, current
                        account and demand deposit account services.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default SiteFooter;
