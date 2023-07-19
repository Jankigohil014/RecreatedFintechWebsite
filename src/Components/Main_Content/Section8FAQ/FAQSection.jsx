import React from 'react';

const FAQSection = () => {
    return (
        <React.Fragment>
            <section>
                <div className='max-w-6xl mx-auto px-4 sm:px-6'>
                    <div className='pb-12 md:pb-20'>
                        {/* Section Header */}
                        <div className='pb-12'>
                            <h2 className='text-4xl/4 md:text-[2.75rem] font-black'>
                                FAQs
                            </h2>
                        </div>
                        {/* Columns */}
                        <div className='md:flex md:space-x-12 space-y-8 md:space-y-0'>
                            {/* Column-1 */}
                            <div className='w-full md:w-1/2 space-y-8'>
                                {/* Item 1 */}
                                <div className='space-y-2'>
                                    <h4 className='font-bold text-xl/6'>
                                        How can I add money to my account?
                                    </h4>
                                    <p className='text-slate-500'>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua, ut enim ad minim veniam.
                                    </p>
                                </div>
                                {/* Item 2 */}
                                <div className='space-y-2'>
                                    <h4 className='font-bold text-xl/6'>
                                        How is my document data stored/secured?
                                    </h4>
                                    <p className='text-slate-500'>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua, ut enim ad minim veniam.
                                    </p>
                                </div>
                                {/* Item 3 */}
                                <div className='space-y-2'>
                                    <h4 className='font-bold text-xl/6'>
                                        I do not want to pay now, how can I
                                        proceed?
                                    </h4>
                                    <p className='text-slate-500'>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua, ut enim ad minim veniam.
                                    </p>
                                </div>
                            </div>
                            {/* Column-2 */}
                            <div className='w-full md:w-1/2 space-y-8'>
                                {/* Item 1 */}
                                <div className='space-y-2'>
                                    <h4 className='font-bold text-xl/6'>
                                        How do I get started with card payments?
                                    </h4>
                                    <p className='text-slate-500'>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua, ut enim ad minim veniam.
                                    </p>
                                </div>
                                {/* Item 2 */}
                                <div className='space-y-2'>
                                    <h4 className='font-bold text-xl/6'>
                                        Can I get a standard card for free?
                                    </h4>
                                    <p className='text-slate-500'>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua, ut enim ad minim veniam.
                                    </p>
                                </div>
                                {/* Item 3 */}
                                <div className='space-y-2'>
                                    <h4 className='font-bold text-xl/6'>
                                        I don't have the required documents, how
                                        can I proceed?
                                    </h4>
                                    <p className='text-slate-500'>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua, ut enim ad minim veniam.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default FAQSection;
