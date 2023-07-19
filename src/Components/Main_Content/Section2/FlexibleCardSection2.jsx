import React from 'react';
import {Link} from 'react-router-dom';
import author_img from '../../../assets/Imges/author_woman-2.jpg';
import ArrowSVG from '../../../assets/SVGs/ArrowSVG';
import card_background_svg from '../../../assets/SVGs/cards-illustration.svg';
import card_features from '../../../assets/Imges/cards_features-02.png';

const FlexibleCardSection2 = () => {
    return (
        <React.Fragment>
            <section>
                <div className='relative max-w-7xl mx-auto '>
                    {/* background */}
                    <div
                        className=' rounded-tr-[100px] mb-24  md:mb-0 absolute -z-10 top-0 left-0 right-0 bottom-0  pointer-events-none bg-slate-800'
                        aria-hidden='true'
                    ></div>
                    <div className='max-w-6xl px-4 sm:px-6 mx-auto'>
                        <div className='pt-12 md:py-20'>
                            {/* Section Content */}
                            <div className='relative mx-auto max-w-xl text-center md:max-w-none md:text-left'>
                                {/* Content */}
                                <div className='md:max-w-lg'>
                                    {/* copy */}
                                    <h2 className='mb-4 text-white text-4xl md:text-5xl font-black'>
                                        Build a flexible card program for your
                                        business needs
                                    </h2>
                                    <p className='text-slate-400 text-md tracking-tight mb-8'>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Odio, quia
                                        dignissimos! Consectetur provident
                                        numquam at labore adipisci accusantium,
                                        officia dignissimos magni qui corrupt.
                                    </p>
                                    {/* Button */}
                                    <div className='mb-8 mx-auto max-w-xs sm:max-w-none'>
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
                                    <div className='flex max-w-md text-left mx-auto md:mx-0'>
                                        <img
                                            className='h-8 self-start shrink-0 mr-3 rounded-full'
                                            src={author_img}
                                            alt='Author'
                                            height={32}
                                            width={32}
                                        />
                                        <div>
                                            <blockquote className='text-slate-400 text-md tracking-tight m-0'>
                                                “ We know the card market very
                                                well and this product provides
                                                the speed, flexible account
                                                model and API-first approach
                                                that no one else can. ”
                                            </blockquote>
                                        </div>
                                    </div>

                                    {/* Image */}
                                    <div className='mt-8 -mb-3 md:mt-36 md:mb-0 md:absolute md:top-0 md:left-[412px]'>
                                        <div className='relative -mx-16 md:mx-0'>
                                            <img
                                                className='mix-blend-lighten md:mt-0 -translate-x-2/4 -translate-y-2/3 md:-translate-y-1/2 max-w-none mt-16 -z-10 top-1/2 left-1/2 absolute'
                                                src={card_background_svg}
                                                alt='card_background_svg'
                                                aria-hidden='true'
                                                height={742}
                                                width={742}
                                            />
                                            <div>
                                                <img
                                                    className='md:max-w-none md:rotate-[48deg]'
                                                    src={card_features}
                                                    alt='cards fear=tures'
                                                    width={775}
                                                    height={450}
                                                />
                                            </div>
                                        </div>
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

export default FlexibleCardSection2;
