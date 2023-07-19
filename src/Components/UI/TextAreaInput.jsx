import React from 'react';

const TextAreaInput = (props) => {
    return (
        <div className='sm:flex justify-between items-start sm:space-x-4'>
            <label
                className=' block text-slate-800 text-left text-sm font-[550] leading-5 mt-2 mb-2 sm:mb-0'
                htmlFor={props.id}
            >
                {props.label}
            </label>
            <div className=' sm:w-72 sm:space-x-4 shrink-0'>
                <textarea
                    id={props.id}
                    className='border rounded px-3 py-2 w-full text-sm/5'
                    rows={props.rows}
                ></textarea>
            </div>
        </div>
    );
};

export default TextAreaInput;
