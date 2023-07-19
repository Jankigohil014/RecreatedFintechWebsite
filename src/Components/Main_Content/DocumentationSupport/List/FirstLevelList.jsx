import React from 'react';
import SecondLevelList from './SecondLevelList';
const ListItems = [
    {
        id: 1,
        text: 'Welcome',
        sublist: [
            {id: '1_1', text: 'Installation'},
            {id: '1_2', text: 'Quick start'},
            {id: '1_3', text: 'Folder content'},
        ],
    },
    {
        id: 2,
        text: 'Sending Money',
        sublist: [
            {
                id: '2_1',
                text: 'How do I send money to a bank account or card?',
                active: true,
            },
            {id: '2_2', text: 'What recipient account details do I need?'},
            {
                id: '2_3',
                text: 'How do I send money to a bank account or card?',
            },
            {
                id: '2_4',
                text: 'How do I download my transfer confirmation?',
            },
            {
                id: '2_5',
                text: 'How to send money to a specific currency',
            },
        ],
    },
    {
        id: 3,
        text: 'Account Management',
        sublist: [
            {id: '3_1', text: 'Link'},
            {id: '3_2', text: 'Link'},
        ],
    },
    {
        id: 4,
        text: 'Card',
        sublist: [
            {id: '4_1', text: 'Link'},
            {id: '4_2', text: 'Link'},
        ],
    },
    {
        id: 5,
        text: 'Credit Products',
        sublist: [
            {id: '5_1', text: 'Link'},
            {id: '5_2', text: 'Link'},
        ],
    },
    {
        id: 6,
        text: 'Insurance',
        sublist: [
            {id: '6_1', text: 'Link'},
            {id: '6_2', text: 'Link'},
        ],
    },
    {
        id: 7,
        text: 'Wealth and Trading',
        sublist: [
            {id: '7_1', text: 'Link'},
            {id: '7_2', text: 'Link'},
        ],
    },
];

const FirstLevelList = () => {
    return (
        <React.Fragment>
            {/* 1st Level List */}
            {ListItems.map((listitem) => (
                <li key={listitem.key}>
                    <a
                        href='#0'
                        className='flex items-center text-slate-800 text-sm font-bold'
                        aria-haspopup='true'
                        aria-expanded='true'
                    >
                        <svg
                            className='rotate-90 mr-2 fill-slate-400'
                            width='8'
                            height='8'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path d='M2.854.647A.5.5 0 0 0 2 1v6a.5.5 0 0 0 .854.354l3-3a.5.5 0 0 0 .058-.638l-.058-.07-3-3Z'></path>
                        </svg>
                        <span>{listitem.text}</span>
                    </a>
                    {/* Second Level List */}
                    <ul className='mt-2 pl-6 text-sm/6 space-y-2'>
                        <SecondLevelList
                            secondListListItems={listitem.sublist}
                        />
                    </ul>
                </li>
            ))}
        </React.Fragment>
    );
};

export default FirstLevelList;
