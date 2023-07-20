import React from 'react';
import CheckMark from './../../../assets/SVGs/CheckMark';
import FacebookLogo from '../../../assets/SVGs/logo-facebook.svg';
import NikeLogo from '../../../assets/SVGs/logo-nike.svg';
import SamsungLogo from '../../../assets/SVGs/logo-samsung.svg';
import DisneyLogo from '../../../assets/SVGs/logo-disney.svg';
import Hero_illustration from '../../../assets/SVGs/hero-illustration.svg';
import Input from '../../UI/Input';
import SelectInput from '../../UI/SelectInput';
import TextAreaInput from '../../UI/TextAreaInput';

const companySize = [
    {name: 'Less Than 10'},
    {name: 'More Than 10'},
    {name: 'More Than 20'},
    {name: 'More Than 50'},
];
const country = [
    {name: 'India'},
    {name: 'United States'},
    {name: 'United Kingdom'},
    {name: 'Germany'},
    {name: 'Italy'},
    {name: 'South Korea'},
];

const ApplyMainContentSection = () => {
    return (
        <React.Fragment>
            <section>
                <div className='max-w-6xl mx-auto px-4 sm:px-6'>
                    <div className='pb-12 md:pb-20 pt-36 md:pt-40'>
                        <div className='lg:flex lg:space-x-12 xl:space-x-16'>
                            {/* Left Side Content */}
                            <div className='mb-16 lg:mb-0 lg:mt-16 grow text-center  lg:text-left'>
                                <h1
                                    className='text-4xl md:text-[2.75rem] font-bold mb-12 aos-init aos-animate'
                                    data-aos='fade-up'
                                    data-aos-delay='100'
                                >
                                    Build flexible cards for your business
                                </h1>
                                {/* List */}
                                <div
                                    className='mb-12 aos-init aos-animate'
                                    data-aos='fade-up'
                                    data-aos-delay='200'
                                >
                                    <ul className='inline-flex flex-col text-slate-500 space-y-[0.625rem]'>
                                        <li className='flex items-center text-left'>
                                            <CheckMark />
                                            <span>
                                                Create cards that work exactly
                                                as you configured them
                                            </span>
                                        </li>
                                        <li className='flex items-center text-left'>
                                            <CheckMark />
                                            <span>
                                                Focus critical resources on your
                                                core business
                                            </span>
                                        </li>
                                        <li className='flex items-center text-left'>
                                            <CheckMark />
                                            <span>
                                                Make real-time decisions on
                                                charges and spendings.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                {/* Trusted press Logos */}
                                <div
                                    className='w-full aos-init aos-animate'
                                    data-aos='fade-up'
                                    data-aos-delay='300'
                                >
                                    {/* Text */}
                                    <div className='mb-5 text-center lg:text-left text-xs/6 font-light uppercase tracking-wide text-slate-400'>
                                        Trusted bt the best
                                    </div>
                                    {/* Logos */}
                                    <div className='flex flex-nowrap justify-center lg:justify-start items-center -m-4 lg:-m-2 xl:-m-4 '>
                                        {/* Facebook */}
                                        <div className='p-4 lg:p-2 xl:p-4'>
                                            <img
                                                src={FacebookLogo}
                                                alt='Facebook'
                                                width={99}
                                                height={19}
                                            />
                                        </div>
                                        {/* Nike */}
                                        <div className='p-4 lg:p-2 xl:p-4'>
                                            <img
                                                src={NikeLogo}
                                                alt='Nike'
                                                width={64}
                                                height={23}
                                            />
                                        </div>
                                        {/* Samsung */}
                                        <div className='p-4 lg:p-2 xl:p-4'>
                                            <img
                                                src={SamsungLogo}
                                                alt='Samsung'
                                                width={95}
                                                height={32}
                                            />
                                        </div>
                                        {/* Disney */}
                                        <div className='p-4 lg:p-2 xl:p-4'>
                                            <img
                                                src={DisneyLogo}
                                                alt='Disney'
                                                width={86}
                                                height={36}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side Form with Background */}
                            <div className='relative shrink-0 text-center lg:text-left'>
                                {/* BG */}
                                <div
                                    className=' bg-gradient-to-tr from-blue-600 to-blue-500 rounded-bl-[100px] mb-44 lg:-mt-[9999px] -mx-4 sm:-mx-6 lg:ml-0 lg:-mr-[9999px] -z-10 absolute top-0 bottom-0 right-0 left-0 pointer-events-none'
                                    aria-hidden='true'
                                ></div>
                                {/* Illustration */}
                                <img
                                    className=' mix-blend-lighten -translate-x-1/2 -translate-y-1/2 max-w-none  ml-20 -mt-40 -z-10 absolute top-1/2 left-1/2 pointer-events-none'
                                    src={Hero_illustration}
                                    alt='Hero-Illustration'
                                    width={960}
                                    height={960}
                                    aria-hidden='true'
                                />

                                {/* Form Area */}
                                <div className='flex pt-12 lg:pt-0 lg:pl-12 xl:pl-20'>
                                    <div
                                        className='shadow-2xl p-6 bg-white max-w-[480px] lg:max-w-none w-full lg:w-[480px] xl:w-[512px] mx-auto lg:mx-0 aos-init aos-animate'
                                        data-aos='fade-up'
                                    >
                                        {/* Form */}
                                        <form>
                                            <div className='space-y-4'>
                                                {/* First Name */}
                                                <Input
                                                    label='First Name'
                                                    inputs={{
                                                        type: 'text',
                                                        id: 'first-name',
                                                        placeholder: 'John',
                                                    }}
                                                />
                                                {/* Last Name */}
                                                <Input
                                                    label='Last Name'
                                                    inputs={{
                                                        type: 'text',
                                                        id: 'last-name',
                                                        placeholder: 'Peterson',
                                                    }}
                                                />
                                                {/* Email */}
                                                <Input
                                                    label='Work Email'
                                                    inputs={{
                                                        type: 'email',
                                                        id: 'email',
                                                        placeholder:
                                                            'john.peterson@example.com',
                                                    }}
                                                />
                                                {/* Website */}
                                                <Input
                                                    label='Website'
                                                    inputs={{
                                                        type: 'text',
                                                        id: 'website',
                                                        placeholder:
                                                            'example.com',
                                                    }}
                                                />
                                                {/* Company Size */}
                                                <SelectInput
                                                    label='Company Size'
                                                    id='company-size'
                                                    options={companySize}
                                                />
                                                {/* Country */}
                                                <SelectInput
                                                    label='Company Size'
                                                    id='company-size'
                                                    options={country}
                                                />
                                                {/* Anything Else */}
                                                <TextAreaInput
                                                    label='Anything Else?'
                                                    id='comment'
                                                    rows={4}
                                                />
                                            </div>
                                            <div className='text-right mt-6'>
                                                <button className=' inline-flex justify-center items-center px-4 py-2 text-blue-50 bg-blue-500 shadow-sm whitespace-nowrap rounded-full text-base/5 font-[550]'>
                                                    Submit the form
                                                </button>
                                            </div>
                                        </form>
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

export default ApplyMainContentSection;
