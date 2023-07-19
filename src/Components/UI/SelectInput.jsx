import React from 'react';

const SelectInput = (props) => {
    return (
        <div className='sm:flex justify-between items-start sm:space-x-4'>
            <label
                className=' block text-slate-800 text-left text-sm font-[550] leading-5 mt-2 mb-2 sm:mb-0'
                htmlFor={props.id}
            >
                {props.label}
            </label>
            <div className=' sm:w-72 sm:space-x-4 shrink-0'>
                <select
                    id={props.id}
                    className='border rounded pr-10 py-2 w-full text-sm/5'
                    required
                >
                    {props.options.map((optionEle) => (
                        <option key={optionEle.name}>{optionEle.name}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default SelectInput;
