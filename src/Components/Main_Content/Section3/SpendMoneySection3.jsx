import React from 'react';
import {Link} from 'react-router-dom';
import ArrowSVG from '../../../assets/SVGs/ArrowSVG';
import author_man_img from '../../../assets/Imges/author_man-2.jpg';
import map_feature from '../../../assets/Imges/map_features.png';

function SpendMoneySection3() {
    return (
        <React.Fragment>
            <section className='mt-8 md:mt-20' data-aos-id-3>
                {/* background */}
                <div className='max-w-7xl relative mx-auto'>
                    <div
                        className='bg-gradient-to-b from-slate-100 rounded-tl-[100px] mb-24  md:mb-0 absolute -z-10 top-0 left-0 right-0 bottom-0  pointer-events-none '
                        aria-hidden='true'
                    ></div>
                    <div className='max-w-6xl px-4 sm:px-6 mx-auto'>
                        <div className='pt-12 pb-6 md:pt-20'>
                            {/* Section Content */}
                            <div className='relative mx-auto flex flex-col justify-end items-center max-w-xl text-center md:max-w-none md:text-left md:flex-row'>
                                {/* Content */}
                                <div className='max-w-full w-[512px] shrink-0 md:order-1'>
                                    {/* copy */}
                                    <h2
                                        className='mb-4 text-4xl md:text-[2.75rem] font-black aos-init aos-animate '
                                        data-aos='fade-up'
                                        data-aos-anchor='[data-aos-id-3]'
                                        data-aos-delay='100'
                                    >
                                        Spend your money everwhere, pay anyone
                                        effortlessy
                                    </h2>
                                    <p
                                        className='text-slate-500 text-lg/6 mb-8 aos-init aos-animate '
                                        data-aos='fade-up'
                                        data-aos-anchor='[data-aos-id-3]'
                                        data-aos-delay='200'
                                    >
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Odio, quia
                                        dignissimos! Consectetur provident
                                        numquam at labore adipisci accusantium,
                                        officia dignissimos magni qui corrupt.
                                    </p>
                                    {/* Button */}
                                    <div
                                        className='mb-8 mx-auto max-w-xs sm:max-w-none aos-init aos-animate'
                                        data-aos='fade-up'
                                        data-aos-anchor='[data-aos-id-3]'
                                        data-aos-delay='300'
                                    >
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
                                    {/* Quote */}
                                    <div
                                        className='flex max-w-md text-left mx-auto md:mx-0  aos-init aos-animate'
                                        data-aos='fade-up'
                                        data-aos-anchor='[data-aos-id-3]'
                                        data-aos-delay='300'
                                    >
                                        <img
                                            className='h-8 self-start shrink-0 mr-3 rounded-full'
                                            src={author_man_img}
                                            alt='Author'
                                            height={32}
                                            width={32}
                                        />
                                        <div>
                                            <blockquote className='text-slate-500 text-md tracking-tight m-0'>
                                                “ We know the card market very
                                                well and this product provides
                                                the speed, flexible account
                                                model and API-first approach
                                                that no one else can. ”
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                                {/* Image */}
                                <div className='max-w-sm w-full mt-8 md:max-w-none md:mt-0 md:mr-8'>
                                    <div className='relative -mx-8 md:mx-0'>
                                        <img
                                            className='md:max-w-none aos-init aos-animate'
                                            src={map_feature}
                                            alt='map_feature'
                                            height={496}
                                            width={496}
                                            data-aos='fade-up'
                                            data-aos-anchor='[data-aos-id-3]'
                                            data-aos-delay='300'
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
}

export default SpendMoneySection3;
