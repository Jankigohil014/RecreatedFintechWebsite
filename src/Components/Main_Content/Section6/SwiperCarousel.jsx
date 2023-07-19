import React, {useEffect} from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import 'swiper/swiper-bundle.esm.js';
import testimonialImg_1 from '../../../assets/Imges/testimonial-01.jpg';
import testimonialSVG_1 from '../../../assets/SVGs/testimonial-sign-01.svg';
import testimonialImg_2 from '../../../assets/Imges/testimonial-02.jpg';
import testimonialSVG_2 from '../../../assets/SVGs/testimonial-sign-02.svg';

const SwiperCarousel = () => {
    // Initializing Swiper.js
    useEffect(() => {
        const testimonialEl = document.querySelectorAll(
            '.testimonial-carousel',
        );
        if (testimonialEl.length > 0) {
            const testimonial = new Swiper('.testimonial-carousel', {
                slidesPerView: 1,
                grabCursor: true,
                spaceBetween: 30,
                watchSlidesProgress: true,
                effect: 'fade',
                pagination: {
                    el: '.testimonial-carousel-pagination',
                    clickable: true,
                },
            });
        }
    }, []);

    return (
        <React.Fragment>
            {/* Swiper */}
            <div className='testimonial-carousel max-w-sm md:max-w-none mx-auto swiper-container swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden'>
                <div
                    className='swiper-wrapper'
                    id='swiper-wrapper-fe6a46a2dbfdb37f'
                    aria-live='polite'
                    style={{transitionDuration: '0ms'}}
                >
                    {/* Card#1 */}
                    <div
                        className='swiper-slide swiper-slide-visible swiper-slide-active shadow-2xl flex flex-col h-auto text-left'
                        role='group'
                        aria-label='1/2'
                        style={{
                            width: '384px',
                            opacity: 1,
                            transform: 'translate3d(0px, 0px, 0px)',
                            transitionDuration: '0ms',
                        }}
                    >
                        <div className='relative after:bg-gradient-to-t after:from-slate-700 after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 '>
                            <img
                                className='md:max-w-none'
                                src={testimonialImg_1}
                                alt='testimonial-img-1'
                                width={384}
                                height={180}
                            />
                        </div>
                        <div className='flex grow flex-col pt-14 p-6 bg-gradient-to-t to-slate-700 from-slate-800 relative '>
                            <img
                                className='translate-y-1/2 bottom-full absolute'
                                src={testimonialSVG_1}
                                width={150}
                                height={71}
                                alt='testimonial-styles'
                            />
                            <p className='text-slate-200 grow mb-4 font-medium'>
                                “ This card is awesome. The app lets me link
                                foreign cards with a new one which makes
                                everything 100 times easier. Like Apple Pay,
                                online shopping without useless phone
                                confirmation. I wish I knew this earlier. ”
                            </p>
                            <div className='text-slate-500 font-medium text-sm/6 '>
                                <span className='text-slate-200'>
                                    Anna Rodger
                                </span>
                                -
                                <span className='text-slate-400'>
                                    CEO & Co-Founder
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Card#2 */}
                    <div
                        className={`swiper-slide shadow-2xl flex flex-col h-auto text-left swiper-slide-visible swiper-slide-active`}
                        role='group'
                        aria-label='2/2'
                        style={{
                            width: '384px',
                            opacity: 1,
                            transform: 'translate3d(-384px, 0px, 0px)',
                            transitionDuration: '0ms',
                        }}
                    >
                        <div className='relative after:bg-gradient-to-t after:from-slate-700 after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 '>
                            <img
                                className='md:max-w-none'
                                src={testimonialImg_2}
                                alt='testimonial-img-1'
                                width={384}
                                height={180}
                            />
                        </div>
                        <div className='flex grow flex-col pt-14 p-6 bg-gradient-to-t to-slate-700 from-slate-800 relative '>
                            <img
                                className='translate-y-1/2 bottom-full absolute'
                                src={testimonialSVG_2}
                                width={150}
                                height={71}
                                alt='testimonial-styles'
                            />
                            <p className='text-slate-200 grow mb-4 font-medium'>
                                “ This card is awesome. The app lets me link
                                foreign cards with a new one which makes
                                everything 100 times easier. Like Apple Pay,
                                online shopping without useless phone
                                confirmation. I wish I knew this earlier. ”
                            </p>
                            <div className='text-slate-500 font-medium text-sm/6 '>
                                <span className='text-slate-200'>
                                    Maria Pietro
                                </span>
                                -
                                <span className='text-slate-400'>
                                    CEO & Co-Founder
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <span
                    className='swiper-notification'
                    aria-live='assertive'
                    aria-atomic='true'
                ></span>
            </div>
            {/*Navigation Buttons  Bullets */}
            <div className='mt-4'>
                <div className='testimonial-carousel-pagination text-center swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal'>
                    <span
                        className='swiper-pagination-bullet'
                        tabIndex={0}
                        role='button'
                        aria-label='Go to slide 1'
                    ></span>
                    <span
                        className='swiper-pagination-bullet swiper-pagination-bullet-active'
                        tabIndex={0}
                        role='button'
                        aria-label='Go to slide 2'
                    ></span>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SwiperCarousel;
