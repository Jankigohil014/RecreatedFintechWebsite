import React from 'react';

const SupportPageArticle = ({sidebarToggler}) => {
    const ShowSidebar = () => {
        sidebarToggler();
    };
    return (
        <React.Fragment>
            {/* Page Container */}
            <div className='md:grow md:pl-80'>
                <div className='pb-12 pt-28 md:pt-36 md:pb-16'>
                    {/* Page Navigation dispaly */}
                    <div className='flex items-center md:hidden mb-8'>
                        {/* Hamburger Button */}
                        <button
                            aria-controls='sidebar'
                            aria-expanded='false'
                            onClick={ShowSidebar}
                        >
                            <span className='absolute h-px w-px p-0 -m-px overflow-hidden whitespace-nowrap border-0 '>
                                Menu
                            </span>
                            <svg
                                class='h-6 w-6 fill-slate-600'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <rect x='4' y='5' width='16' height='2'></rect>
                                <rect x='4' y='11' width='16' height='2'></rect>
                                <rect x='4' y='17' width='16' height='2'></rect>
                            </svg>
                        </button>

                        {/* BreadCrumbs */}
                        <div className='flex items-center min-w-0 text-sm/6 whitespace-nowrap ml-3'>
                            <span className='text-slate-500'>
                                Sending Money
                            </span>
                            <svg
                                class=' fill-slate-400 h-3 w-3 shrink mx-2'
                                viewBox='0 0 16 16'
                            >
                                <path d='M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z'></path>
                            </svg>
                            <span class='font-medium text-slate-800 text-ellipsis overflow-hidden whitespace-nowrap'>
                                How do I send money to a bank account or card?
                            </span>
                        </div>
                    </div>

                    {/* Articles */}
                    <article className='text-slate-500 font-[350]'>
                        <div className='flex items-center mb-4'>
                            <svg
                                width='24'
                                height='24'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <defs>
                                    <linearGradient
                                        x1='50%'
                                        y1='100%'
                                        x2='50%'
                                        y2='0%'
                                        id='a'
                                    >
                                        <stop
                                            stop-color='#2563EB'
                                            offset='0%'
                                        ></stop>
                                        <stop
                                            stop-color='#3B82F6'
                                            offset='100%'
                                        ></stop>
                                    </linearGradient>
                                </defs>
                                <g fill='none' fill-rule='evenodd'>
                                    <path
                                        d='M6 22c-.101 0 2.023-8.649 2.023-8.649a.498.498 0 0 1 .83-.204l3.5 3.5a.5.5 0 0 1-.053.753l-6 4.5a.496.496 0 0 1-.3.1Z'
                                        fill='#1D4ED8'
                                    ></path>
                                    <path
                                        d='M17.496 23a.499.499 0 0 1-.3-.1L1.2 10.9a.498.498 0 0 1 .114-.864l20-8a.5.5 0 0 1 .676.562l-4.004 20a.5.5 0 0 1-.49.402Z'
                                        fill='url(#a)'
                                        fill-rule='nonzero'
                                    ></path>
                                    <path
                                        d='M6 22a.498.498 0 0 1-.5-.5V14a.5.5 0 0 1 .202-.401l15.5-11.5a.5.5 0 0 1 .645.761L8.099 16.075l-1.625 5.583A.5.5 0 0 1 6 22Z'
                                        fill='#7DD3FC'
                                        fill-rule='nonzero'
                                    ></path>
                                </g>
                            </svg>
                            <span class='text-slate-800 font-bold ml-3 text-lg/6'>
                                Sending money
                            </span>
                        </div>
                        <h2 className='mb-4 text-slate-800 text-3xl'>
                            How do I send money to a bank account or card?
                        </h2>
                        <div className='space-y-6'>
                            <div className='space-y-4'>
                                <p>
                                    To transfer any of over 30 supported fiat
                                    currencies to a bank account, on the main
                                    accounts screen tap transfer (button with
                                    two arrows at the bottom of the screen) →
                                    New → Add a bank recipient. You'll be asked
                                    to add the bank transfer details for either
                                    an Individual, or a Business if you're
                                    paying a company.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Quis enim lobortis scelerisque fermentum.
                                    Neque sodales ut etiam sit amet how to
                                    manage anything malesuada proin libero nunc
                                    consequat interdum varius. Quam pellentesque
                                    nec nam aliquam sem et tortor consequat.
                                    Pellentesque adipiscing commodo elit at
                                    imperdiet.
                                </p>
                            </div>
                            <div className='space-y-4'>
                                <h3 className=' text-slate-800 font-bold text-lg'>
                                    Sending money to bank account
                                </h3>
                                <p>
                                    To transfer any of over 30 supported fiat
                                    currencies to a bank account, on the main
                                    accounts screen tap transfer (button with
                                    two arrows at the bottom of the screen) →
                                    New → Add a bank recipient. You'll be asked
                                    to add the bank transfer details for either
                                    an Individual, or a Business if you're
                                    paying a company.
                                </p>
                            </div>
                            <div className='space-y-4'>
                                <h3 className=' text-slate-800 font-bold text-lg'>
                                    Sending money to card
                                </h3>
                                <p>
                                    Enter the details of the card you want to
                                    send money to. If you have the card at hand,
                                    you can take a picture of the front of the
                                    card or tap the back of your phone against
                                    the card to capture the card number. Hit
                                    'Save securely' which saves the card number
                                    details so you won't have to re-enter it
                                    next time.
                                </p>
                                <p>
                                    Enter the amount you wish to send and below
                                    the currency, you can choose from which
                                    currency balance the amount will be
                                    deducted. There is also an option to add a
                                    note to yourself, but it is not required and
                                    won't be sent to the beneficiary.
                                </p>
                            </div>
                            <div className='space-y-4'>
                                <h3 className=' text-slate-800 font-bold text-lg'>
                                    Conclusion
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua,
                                    quis enim lobortis scelerisque fermentum,
                                    neque sodales ut etiam sit amet how to
                                    manage anything malesuada proin libero nunc
                                    consequat interdum varius, nec &nbsp;
                                    <a
                                        href='#0'
                                        className='text-blue-500 font[550] hover:underline'
                                    >
                                        pellentesque&nbsp;
                                    </a>
                                    nec nam aliquam sem et tortor consequat.
                                    Pellentesque adipiscing commodo elit&nbsp;
                                    <a
                                        href='#0'
                                        className='text-blue-500 font[550] hover:underline'
                                    >
                                        here
                                    </a>
                                </p>
                            </div>
                        </div>
                    </article>

                    {/* Footer */}
                    <footer className='pt-8 border-slate-200 border-t-2 mt-8'>
                        <div className='flex items-center space-x-6'>
                            <div className='text-slate-800 font-bold text-xl'>
                                Was this page helpful?
                            </div>
                            <div className='flex items-center space-x-2'>
                                <button className=' inline-flex items-center justify-center shadow-sm bg-blue-500 text-blue-50 whitespace-nowrap rounded-full font-[550] text-sm px-3 py-2'>
                                    <svg
                                        class='shrink-0 mr-2 fill-blue-300'
                                        width='12'
                                        height='13'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path d='M9.956 4.516H6.731v-3a1.314 1.314 0 0 0-1.5-1.5.5.5 0 0 0-.45.375L3 6.016v6h6.431c.985-.02 1.81-.75 1.95-1.725l.6-3.45a1.9 1.9 0 0 0-.45-1.575 1.884 1.884 0 0 0-1.575-.75ZM0 6.016h2v6H0z'></path>
                                    </svg>
                                    <span>Yes</span>
                                </button>
                                <button className=' inline-flex items-center justify-center shadow-sm bg-blue-500 text-blue-50 whitespace-nowrap rounded-full font-[550] text-sm px-3 py-2'>
                                    <svg
                                        class='shrink-0 mr-2 fill-blue-300'
                                        width='12'
                                        height='13'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path d='M9.956 7.5H6.731v3a1.314 1.314 0 0 1-1.5 1.5.5.5 0 0 1-.45-.375L3 6V0h6.431c.985.02 1.81.75 1.95 1.725l.6 3.45a1.9 1.9 0 0 1-.45 1.575c-.37.493-.959.773-1.575.75ZM0 6h2V0H0z'></path>
                                    </svg>
                                    <span>Nope</span>
                                </button>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SupportPageArticle;
