import React from 'react';
import CheckMark from '../../../assets/SVGs/CheckMark';
import SwiperCarousel from './SwiperCarousel';

const CompilanceCardSection6 = () => {
    return (
        <React.Fragment>
            <section className='mt-12 md:mt-20' data-aos-id-6>
                <div className='relative max-w-7xl mx-auto'>
                    {/* Bg */}
                    <div
                        className='bg-gradient-to-b from-slate-100 rounded-tl-[100px] mb-24  md:mb-0 absolute -z-10 top-0 left-0 right-0 bottom-0  pointer-events-none '
                        aria-hidden='true'
                    ></div>
                    <div className='max-w-6xl px-4 sm:px-6 mx-auto'>
                        <div className='py-12 md:py-20'>
                            {/* Section Content */}
                            <div className='relative mx-auto flex flex-col justify-end items-center max-w-xl text-center md:max-w-none md:text-left md:flex-row'>
                                {/* Content */}
                                <div className='shrink-0 md:order-1 w-[512px] max-w-full'>
                                    {/* Copy */}
                                    <h2
                                        className='mb-4 text-4xl md:text-[2.75rem] font-bold aos-init aos-animate'
                                        data-aos='fade-up'
                                        data-aos-delay='100'
                                        data-aos-anchor='[data-aos-id-6]'
                                    >
                                        Compliance built card for businesses and
                                        professionals
                                    </h2>
                                    <p
                                        className='text-slate-500 text-lg/6 mb-8 aos-init aos-animate'
                                        data-aos='fade-up'
                                        data-aos-delay='200'
                                        data-aos-anchor='[data-aos-id-6]'
                                    >
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Odio, quia
                                        dignissimos! Consectetur provident
                                        numquam at labore adipisci accusantium,
                                        officia corrupt.
                                    </p>
                                    {/* List */}
                                    <ul
                                        className='inline-flex flex-col gap-4 text-slate-500 aos-init aos-animate'
                                        data-aos='fade-up'
                                        data-aos-delay='300'
                                        data-aos-anchor='[data-aos-id-6]'
                                    >
                                        <li className='flex items-center'>
                                            <CheckMark />
                                            <span>Identity verifications</span>
                                        </li>
                                        <li className='flex items-center'>
                                            <CheckMark />
                                            <span>
                                                Secure credit card data
                                                tokenization
                                            </span>
                                        </li>
                                        <li className='flex items-center'>
                                            <CheckMark />
                                            <span>
                                                Online and mobile payments
                                            </span>
                                        </li>
                                        <li className='flex items-center'>
                                            <CheckMark />
                                            <span>
                                                IGlobal regulations and
                                                compliance
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                {/* Carousel */}
                                <div
                                    className='max-w-sm w-full mt-12 md:max-w-none md:mt-0 md:mr-8 aos-init aos-animate'
                                    data-aos='fade-up'
                                    data-aos-anchor='[data-aos-id-6]'
                                >
                                    <div className='relative mx-auto max-w-sm'>
                                        {/* slide BG */}
                                        <div
                                            className='bg-slate-100 -mt-14 -mx-14 -z-10 top-0 bottom-0 right-0 left-0 absolute'
                                            aria-hidden='true'
                                        ></div>
                                        <SwiperCarousel />
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

export default CompilanceCardSection6;
