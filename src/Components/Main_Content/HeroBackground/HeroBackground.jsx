import React from 'react';
import classes from './HeroBackgrounds.module.css';
import {Link} from 'react-router-dom';
import HeroIllustration from '../../../assets/SVGs/HeroILLustration';
import formImg from '../../../assets/Imges/hero-image.jpg';
import BusinessSVG from '.././../../assets/SVGs/BusinessSVG';

const HeroBackground = () => {
    return (
        <section className='relative'>
            {/* bg */}
            <div
                className={`absolute mb-28 md:mb-0 -z-10 top-0 bottom-0 right-0 left-0 rounded-bl-[100px] pointer-events-none ${classes.backgroundEffect}`}
                aria-hidden={'true'}
            ></div>
            {/* content-box */}
            <div className='max-w-6xl px-4 md:px-6 mx-auto '>
                <div className='pt-36 md:pt-40 md:pb-20 '>
                    <div className='relative mx-auto max-w-xl text-center md:text-left md:max-w-none '>
                        {/* content */}
                        <div className={classes.content}>
                            <h1 className='text-white font-bold text-4xl md:text-6xl  text-center md:text-left mb-6'>
                                Create physical and virtual cards for your
                                &nbsp;
                                <span className='inline-flex justify-center items-center relative'>
                                    <BusinessSVG />
                                    business
                                </span>
                            </h1>
                            <p
                                className='text-slate-300 text-center md:text-left text-lg mb-8'
                                data-aos='fade-up'
                                data-aos-delay='200'
                            >
                                Our landing page template works on all devices,
                                so you only
                                <br className='hidden md:block' /> have to set
                                it up once, and get beautiful results forever.
                            </p>
                            {/* Buttons */}
                            <div className='max-w-xs mb-12 mx-auto sm:flex sm:justify-center md:justify-start sm:max-w-none  md:mb-0 '>
                                <div>
                                    <Link
                                        to='apply'
                                        className='inline-flex justify-center whitespace-nowrap items-center bg-slate-900 text-slate-100 shadow-sm px-4 py-2 rounded-full font-medium text-base hover:transition-transform w-full'
                                    >
                                        Get your card
                                        <span className='transition-transform hover:translate-x-0.5 duration-150 ease-in-out ml-2 text-sky-400'>
                                            <svg
                                                className='fill-current'
                                                width='12'
                                                height='10'
                                                xmlns='http://www.w3.org/2000/svg'
                                            >
                                                <path d='M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z'></path>
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                                <div className='mt-4 sm:mt-0 mr-0 sm:ml-4'>
                                    <Link
                                        to='support'
                                        className='inline-flex justify-center whitespace-nowrap items-center bg-blue-400 text-slate-100 shadow-sm px-4 py-2 rounded-full font-medium text-base hover:transition-transform w-full'
                                    >
                                        Read Documentation
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Image */}
                        <div className='max-w-sm -mb-12 mx-auto md:max-w-none md:-mt-6 md:mb-0 md:top-0 md:left-[600px] md:absolute '>
                            <div className='relative -mr-24 -ml-3 md:mx-auto '>
                                <HeroIllustration />
                                <img
                                    src={formImg}
                                    className='md:max-w-none'
                                    width='548'
                                    height='545'
                                    alt='Credit card'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBackground;
