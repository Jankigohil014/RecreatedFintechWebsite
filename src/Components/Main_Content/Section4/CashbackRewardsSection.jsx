import React from 'react';
import CheckMark from '../../../assets/SVGs/CheckMark';
import {Link} from 'react-router-dom';
import ArrowSVG from '../../../assets/SVGs/ArrowSVG';
import stores_features from '../../../assets/Imges/stores_features.png';

const CashbackRewardsSection = () => {
    return (
        <React.Fragment>
            <section className='mt-6'>
                <div className='relative max-w-7xl mx-auto'>
                    {/* bgs */}
                    <div
                        className='border-2 border-slate-200 rounded-tr-[100px] mb-24 md:mb-0 -z-10 top-0 bottom-0 left-0 right-0 absolute pointer-events-none'
                        aria-hidden='true'
                    ></div>
                    <div
                        className='bg-gradient-to-t from-white rounded-tr-[100px] mb-24 md:mb-0 -z-10 top-0 bottom-0 left-0 right-0 absolute pointer-events-none'
                        aria-hidden='true'
                    ></div>
                    <div className='max-w-6xl px-4 sm:px-6 mx-auto'>
                        <div className='py-12 md:py-20'>
                            {/* Section Content */}
                            <div className='flex flex-col items-center text-center relative mx-auto max-w-xl md:max-w-none md:text-left md:flex-row'>
                                {/* Content */}
                                <div className='max-w-full w-[512px] shrink-0'>
                                    {/* Copy */}
                                    <h2 className='mb-4 text-4xl md:text-[2.75rem] font-bold'>
                                        Get cashback rewards on your favourite
                                        brands
                                    </h2>
                                    <p className='text-slate-500 text-lg/6 mb-6'>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Odio, quia
                                        dignissimos. Consectetur provident
                                        numquam at labore.
                                    </p>
                                    {/* List */}
                                    <div className='mb-8 sm:columns-2 pointer-events-none'>
                                        {/* Column-1 */}
                                        <div>
                                            <h5 className='font-bold mb-5'>
                                                Physical Stores
                                            </h5>
                                            <ul className='inline-flex flex-col gap-2 text-slate-500'>
                                                <li className='flex items-center'>
                                                    <CheckMark />
                                                    <span>Starbucks</span>
                                                </li>
                                                <li className='flex items-center'>
                                                    <CheckMark />
                                                    <span>Tesco</span>
                                                </li>
                                                <li className='flex items-center'>
                                                    <CheckMark />
                                                    <span>American Eagel</span>
                                                </li>
                                                <li className='flex items-center'>
                                                    <CheckMark />
                                                    <span>Bershka</span>
                                                </li>
                                                <li className='flex items-center'>
                                                    <CheckMark />
                                                    <span>Sainsbury's</span>
                                                </li>
                                                <li className='flex items-center'>
                                                    <CheckMark />
                                                    <span>Marks & Spencer</span>
                                                </li>
                                                <li className='flex items-center'>
                                                    <CheckMark />
                                                    <span>Primark</span>
                                                </li>
                                                <li className='flex items-center'>
                                                    <CheckMark />
                                                    <span>SportsDirect</span>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* Column-2 */}
                                        <div>
                                            <div>
                                                <h5 className='font-bold mb-5'>
                                                    Online Stores
                                                </h5>
                                                <ul className='inline-flex flex-col gap-2 text-slate-500'>
                                                    <li className='flex items-center'>
                                                        <CheckMark />
                                                        <span>
                                                            Amazon Prime
                                                        </span>
                                                    </li>
                                                    <li className='flex items-center'>
                                                        <CheckMark />
                                                        <span>
                                                            Universal Store
                                                        </span>
                                                    </li>
                                                    <li className='flex items-center'>
                                                        <CheckMark />
                                                        <span>Apple One</span>
                                                    </li>
                                                    <li className='flex items-center'>
                                                        <CheckMark />
                                                        <span>Booking.com</span>
                                                    </li>
                                                    <li className='flex items-center'>
                                                        <CheckMark />
                                                        <span>Netflix</span>
                                                    </li>
                                                    <li className='flex items-center'>
                                                        <CheckMark />
                                                        <span>Deliveroo</span>
                                                    </li>
                                                    <li className='flex items-center'>
                                                        <CheckMark />
                                                        <span>Spotify</span>
                                                    </li>
                                                    <li className='flex items-center'>
                                                        <CheckMark />
                                                        <span>
                                                            Well Made Clothes
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Button */}
                                    <div className='mx-auto max-w-xs sm:max-w-none'>
                                        <Link
                                            to='apply'
                                            className='inline-flex justify-start items-center px-4 py-2 text-start font-medium whitespace-nowrap text-white bg-blue-500 shadow-sm rounded-full'
                                        >
                                            Get your card
                                            <span className='transition-transform hover:translate-x-0.5 duration-150 ease-in-out ml-2 text-sky-300'>
                                                <ArrowSVG />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                {/* Image */}
                                <div className='max-w-sm w-full mt-8 md:max-w-none md:ml-8 md:mt-0'>
                                    <div className='relative -mx-8 md:mx-0'>
                                        <img
                                            className='mx-auto md:max-w-none'
                                            src={stores_features}
                                            alt='stores features'
                                            height={496}
                                            width={496}
                                        />
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

export default CashbackRewardsSection;
