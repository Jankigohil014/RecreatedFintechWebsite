import React from 'react';

const CheckMark = () => {
    return (
        <svg
            className='shrink-0 mr-3'
            width='20'
            height='20'
            xmlns='http://www.w3.org/2000/svg'
        >
            <circle className='fill-blue-200' cx='10' cy='10' r='10'></circle>
            <path
                className='fill-blue-500'
                d='M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z'
            ></path>
        </svg>
    );
};

export default CheckMark;
