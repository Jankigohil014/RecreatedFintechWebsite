import React from 'react';
import {Link} from 'react-router-dom';
import ArrowSVG from '../../../assets/SVGs/ArrowSVG';

const CTASection = () => {
    return (
        <React.Fragment>
            <section className='relative'>
                {/* Bg */}
                <div
                    className='bg-slate-800 -z-10 top-0 bottom-0 left-0 right-0 absolute'
                    aria-hidden='true'
                ></div>
                <div
                    className='max-w-6xl mx-auto px-4 sm:px-6 aos-init aos-animate'
                    data-aos='fade-up'
                >
                    <div className='py-12 md:py-20'>
                        <div className='sm:flex sm:flex-col lg:flex-row items-center justify-between'>
                            {/* CTA content */}
                            <div className='text-center mb-6 lg:text-left lg:mr-16 lg:mb-0'>
                                <p className='text-blue-500 font-semibold text-lg mb-6'>
                                    What are you waiting for?
                                </p>
                                <h2 className='text-slate-100 text-4xl md:text-[2.75rem] font-bold '>
                                    Get the only custom super card
                                </h2>
                            </div>

                            {/* Buttons */}
                            <div className='shrink-0'>
                                <div className='max-w-xs mb-12 md:mb-0 mt-4 mx-auto sm:flex sm:max-w-none sm:justify-center md:justify-start space-y-4 sm:space-x-4 sm:space-y-0 '>
                                    <div>
                                        <Link
                                            to='apply'
                                            className='w-full inline-flex justify-center items-center px-4 py-2 font-medium whitespace-nowrap text-blue-50 bg-blue-500 shadow-sm rounded-full'
                                        >
                                            Get your card
                                            <span className='transition-transform hover:translate-x-0.5 duration-150 ease-in-out ml-2 text-sky-300'>
                                                <ArrowSVG />
                                            </span>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            to=''
                                            className='w-full inline-flex justify-center items-center px-4 py-2 text-start font-medium whitespace-nowrap text-white bg-slate-700 shadow-sm rounded-full'
                                        >
                                            Get in touch
                                        </Link>
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

export default CTASection;
