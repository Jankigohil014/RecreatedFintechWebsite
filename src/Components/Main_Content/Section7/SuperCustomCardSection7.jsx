import React from 'react';
import pricingImg01 from '../../../assets/Imges/pricing-01.png';
import pricingImg02 from '../../../assets/Imges/pricing-02.png';
import pricingImg03 from '../../../assets/Imges/pricing-03.png';
import pricingImg04 from '../../../assets/Imges/pricing-04.png';
import {Link} from 'react-router-dom';
import TealCheckMark from '../../../assets/SVGs/TealCheckMark';

const SuperCustomCardSection7 = () => {
    return (
        <React.Fragment>
            <section>
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
                            <div className='text-center relative mx-auto max-w-xl md:max-w-none md:text-left'>
                                {/* Section Header */}
                                <div className='mb-12 md:mb-20 md:max-w-3xl'>
                                    <h2 className='mb-4 text-4xl md:text-[2.75rem] font-bold'>
                                        Get the only custom super card you'll
                                        ever need
                                    </h2>
                                    <p className='text-slate-500 text-lg/6 tracking-tight mb-8'>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua.
                                    </p>
                                </div>

                                {/* Pricing Tables */}
                                <div className='max-w-sm md:max-w-2xl xl:max-w-none md:grid-cols-2 xl:grid-cols-4 grid gap-8 lg:gap-6 items-start mx-auto'>
                                    {/* Pricing Table - 1  */}
                                    <div className='flex flex-col rounded-br-[100px] px-6 py-5 h-full relative'>
                                        {/* img */}
                                        <div className='mb-4'>
                                            <div className='text-center font-bold mb-3  text-lg/6 tracking-tight'>
                                                Starter
                                            </div>
                                            <img
                                                className='w-full rounded-lg'
                                                src={pricingImg01}
                                                alt='starter-prising-01'
                                                width={210}
                                                height={124}
                                            />
                                        </div>
                                        {/* button */}
                                        <div className='mb-5'>
                                            <div className='text-slate-800 font-bold text-2xl/6 text-center mb-4'>
                                                $0/m
                                            </div>
                                            <Link
                                                to=''
                                                className='inline-flex justify-center items-center w-full bg-blue-500 text-blue-50 shadow-sm px-4 py-2 rounded-full whitespace-nowrap font-medium'
                                            >
                                                Get Starter
                                            </Link>
                                        </div>
                                        {/* features */}
                                        <div className='text-slate-800 font-medium mb-4'>
                                            Features include
                                        </div>
                                        <ul className='text-slate-500 text-left space-y-2'>
                                            <li className=' flex items-start'>
                                                <TealCheckMark />
                                                <span>
                                                    Contactless payments
                                                </span>
                                            </li>
                                            <li className=' flex items-start'>
                                                <TealCheckMark />
                                                <span>Mobile payments</span>
                                            </li>
                                            <li className=' flex items-start'>
                                                <TealCheckMark />
                                                <span>
                                                    Extra Card(optional)
                                                </span>
                                            </li>
                                            <li className=' flex items-start'>
                                                <TealCheckMark />
                                                <span>
                                                    Free payments worldwide
                                                </span>
                                            </li>
                                            <li className=' flex items-start'>
                                                <TealCheckMark />
                                                <span>
                                                    Free payments worldwide
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Pricing Table - 2 */}
                                    <div className='flex flex-col rounded-br-[100px] bg-gradient-to-b from-blue-100 to-blue-50 px-6 py-5 h-full relative'>
                                        {/* Badge */}
                                        <div className='absolute top-0 right-0 mr-6 inline-flex rounded-full -translate-y-1/2 bg-teal-500 text-white px-3 py-px font-medium text-sm/6'>
                                            Popular
                                        </div>
                                        {/* img */}
                                        <div className='mb-4'>
                                            <div className='text-center font-bold mb-3  text-lg/6 tracking-tight'>
                                                Smart
                                            </div>
                                            <img
                                                className='w-full rounded-lg'
                                                src={pricingImg02}
                                                alt='starter-prising-02'
                                                width={210}
                                                height={124}
                                            />
                                        </div>
                                        {/* button */}
                                        <div className='mb-5'>
                                            <div className='text-slate-800 font-bold text-2xl/6 text-center mb-4'>
                                                $12/m
                                            </div>
                                            <Link
                                                to=''
                                                className='inline-flex justify-center items-center w-full bg-slate-800 text-blue-50 shadow-sm px-4 py-2 rounded-full whitespace-nowrap font-medium'
                                            >
                                                Get Smart
                                            </Link>
                                        </div>
                                        {/* features */}
                                        <div className='text-slate-800 font-medium mb-4'>
                                            Everything in starter,plus
                                        </div>
                                        <ul className='text-slate-500 text-left space-y-2'>
                                            <li className=' flex items-start'>
                                                <TealCheckMark />
                                                <span>Cashback</span>
                                            </li>
                                            <li className=' flex items-start'>
                                                <TealCheckMark />
                                                <span>Travel insurance</span>
                                            </li>
                                            <li className=' flex items-start'>
                                                <TealCheckMark />
                                                <span>
                                                    3 Extra Cards(optional)
                                                </span>
                                            </li>
                                            <li className=' flex items-start'>
                                                <TealCheckMark />
                                                <span>Flight insurance</span>
                                            </li>
                                            <li className=' flex items-start'>
                                                <TealCheckMark />
                                                <span>
                                                    Two-factor authentication
                                                </span>
                                            </li>
                                            <li className=' flex items-start'>
                                                <TealCheckMark />
                                                <span>
                                                    chatbot and in-app support
                                                </span>
                                            </li>
                                            <li className=' flex items-start'>
                                                <TealCheckMark />
                                                <span>
                                                    Discounted domestic
                                                    transfers
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Pricing Table - 3  */}
                                    <div className='flex flex-col rounded-br-[100px] px-6 py-5 h-full relative'>
                                        {/* img */}
                                        <div className='mb-4'>
                                            <div className='text-center font-bold mb-3  text-lg/6 tracking-tight'>
                                                You
                                            </div>
                                            <img
                                                className='w-full rounded-lg'
                                                src={pricingImg03}
                                                alt='starter-prising-03'
                                                width={210}
                                                height={124}
                                            />
                                        </div>
                                        {/* button */}
                                        <div className='mb-5'>
                                            <div className='text-slate-800 font-bold text-2xl/6 text-center mb-4'>
                                                $24/m
                                            </div>
                                            <Link
                                                to=''
                                                className='inline-flex justify-center items-center w-full bg-blue-500 text-blue-50 shadow-sm px-4 py-2 rounded-full whitespace-nowrap font-medium'
                                            >
                                                Get Starter
                                            </Link>
                                        </div>
                                        {/* features */}
                                        <div className='text-slate-800 font-medium mb-4'>
                                            Everything in Starter,plus
                                        </div>
                                        <ul className='text-slate-500 text-left space-y-2'>
                                            <li className=' flex items-start'>
                                                <TealCheckMark />
                                                <span>
                                                    Split and settle bills
                                                </span>
                                            </li>
                                            <li className=' flex items-start'>
                                                <TealCheckMark />
                                                <span>Money Management</span>
                                            </li>
                                            <li className=' flex items-start'>
                                                <TealCheckMark />
                                                <span>
                                                    5 Extra Cards(optional)
                                                </span>
                                            </li>
                                            <li className=' flex items-start'>
                                                <TealCheckMark />
                                                <span>Finance tracking</span>
                                            </li>
                                            <li className=' flex items-start'>
                                                <TealCheckMark />
                                                <span>
                                                    Free and international
                                                    domestic ATM withdrawals
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Pricing Table - 4  */}
                                    <div className='flex flex-col rounded-br-[100px] px-6 py-5 h-full relative'>
                                        {/* img */}
                                        <div className='mb-4'>
                                            <div className='text-center font-bold mb-3  text-lg/6 tracking-tight'>
                                                Black
                                            </div>
                                            <img
                                                className='w-full rounded-lg'
                                                src={pricingImg04}
                                                alt='starter-prising-04'
                                                width={210}
                                                height={124}
                                            />
                                        </div>
                                        {/* button */}
                                        <div className='mb-5'>
                                            <div className='text-slate-800 font-bold text-2xl/6 text-center mb-4'>
                                                $49/m
                                            </div>
                                            <Link
                                                to=''
                                                className='inline-flex justify-center items-center w-full bg-blue-500 text-blue-50 shadow-sm px-4 py-2 rounded-full whitespace-nowrap font-medium'
                                            >
                                                Get Black
                                            </Link>
                                        </div>
                                        {/* features */}
                                        <div className='text-slate-800 font-medium mb-4'>
                                            Everything in You,plus
                                        </div>
                                        <ul className='text-slate-500 text-left space-y-2'>
                                            <li className=' flex items-start'>
                                                <TealCheckMark />
                                                <span>
                                                    Manage subscriptions
                                                </span>
                                            </li>
                                            <li className=' flex items-start'>
                                                <TealCheckMark />
                                                <span>Savings valuts</span>
                                            </li>
                                            <li className=' flex items-start'>
                                                <TealCheckMark />
                                                <span>
                                                    Commission-free stock trade
                                                </span>
                                            </li>
                                            <li className=' flex items-start'>
                                                <TealCheckMark />
                                                <span>
                                                    Crypto and commodities
                                                </span>
                                            </li>
                                            <li className=' flex items-start'>
                                                <TealCheckMark />
                                                <span>
                                                    Free foreign exachange
                                                </span>
                                            </li>
                                        </ul>
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

export default SuperCustomCardSection7;
