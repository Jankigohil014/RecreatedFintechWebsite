import React from 'react';

const SecondLevelList = (props) => {
    return (
        <React.Fragment>
            {props.secondListListItems.map((listItems) => (
                <li key={listItems.id}>
                    <a
                        href='#0'
                        className={`${
                            listItems.active
                                ? 'text-blue-500 font-[550]'
                                : 'text-slate-600 font-[350]'
                        }`}
                    >
                        {listItems.text}
                    </a>
                </li>
            ))}
        </React.Fragment>
    );
};

export default SecondLevelList;
