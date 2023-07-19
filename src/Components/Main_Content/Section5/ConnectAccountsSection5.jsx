import React from 'react';
import logosBg from '../../../assets/SVGs/logos-bg-illustration.svg';
import logos from '../../../assets/Imges/logos.png';
import classes from './ConnectAccountsSection5.module.css';
const ConnectAccountsSection5 = () => {
    return (
        <React.Fragment>
            <section>
                <div className='relative max-w-7xl mx-auto'>
                    {/* Bg */}
                    <div
                        className='rounded-tr-[100px] -z-10 top-0 bottom-0 left-0 right-0 absolute pointer-events-none bg-gradient-to-tr from-blue-600 to-blue-500 '
                        aria-hidden='true'
                    ></div>
                    <div className='max-w-6xl px-4 sm:px-6 mx-auto'>
                        <div className='py-12 md:py-20'>
                            {/* Section Content */}
                            <div className='relative mx-auto max-w-xl md:max-w-none text-center md:text-left'>
                                {/* Section Header */}
                                <div className='mb-12 md:mb-20 md:max-w-3xl'>
                                    <h2 className='text-white mb-4 text-4xl md:text-[2.75rem] font-bold'>
                                        Get started in minutes and connect all
                                        your accounts in one place
                                    </h2>
                                    <p className='text-blue-200 text-lg/6 tracking-tight mb-8'>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua.
                                    </p>
                                </div>
                                {/* Image */}
                                <div className='flex justify-center mb-6'>
                                    <div className='relative'>
                                        <img
                                            className='mix-blend-lighten -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 -z-10 pointer-events-none max-w-none'
                                            src={logosBg}
                                            alt='glow background'
                                            height={594}
                                            width={639}
                                        />
                                        <img src={logos} alt='logos' />
                                    </div>
                                </div>

                                {/* Items */}
                                <div className='grid md:grid-cols-3 gap-12 text-left items-start max-w-sm md:max-w-none md:gap-0 md:-mx-9 mx-auto'>
                                    {/* 1st Item */}
                                    <div
                                        className={`relative md:mx-9 ${classes.verticle_divider}`}
                                    >
                                        <div className='mb-3'>
                                            <div className='flex justify-center items-center text-teal-600 bg-teal-200 font-bold rounded-full h-9 w-9'>
                                                1
                                            </div>
                                        </div>
                                        <h4 className='text-white font-bold text-lg/6'>
                                            Download the App
                                        </h4>
                                        <p className='text-blue-200'>
                                            Create cards that work exactly as
                                            you configured them. Make real-time
                                            decisions on charges and spendings.
                                        </p>
                                    </div>
                                    {/* 2st Item */}
                                    <div
                                        className={`relative md:mx-9 ${classes.verticle_divider}`}
                                    >
                                        <div className='mb-3'>
                                            <div className='flex justify-center items-center text-teal-600 bg-teal-200 font-bold rounded-full h-9 w-9'>
                                                2
                                            </div>
                                        </div>
                                        <h4 className='text-white font-bold text-lg/6'>
                                            Request your card
                                        </h4>
                                        <p className='text-blue-200'>
                                            Create cards that work exactly as
                                            you configured them. Make real-time
                                            decisions on charges and spendings.
                                        </p>
                                    </div>
                                    {/* 3st Item */}
                                    <div className={`relative md:mx-9`}>
                                        <div className='mb-3'>
                                            <div className='flex justify-center items-center text-teal-600 bg-teal-200 font-bold rounded-full h-9 w-9'>
                                                3
                                            </div>
                                        </div>
                                        <h4 className='text-white font-bold text-lg/6'>
                                            Connect all your account
                                        </h4>
                                        <p className='text-blue-200'>
                                            Create cards that work exactly as
                                            you configured them. Make real-time
                                            decisions on charges and spendings.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default ConnectAccountsSection5;
