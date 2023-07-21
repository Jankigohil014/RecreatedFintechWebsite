<<<<<<< HEAD
import React, {useState} from 'react';
import SecondLevelList from './SecondLevelList';
const ListItems = [
    {
        id: 0,
        text: 'Welcome',
        isOpen: true,
=======
import React from 'react';
import SecondLevelList from './SecondLevelList';
const ListItems = [
    {
        id: 1,
        text: 'Welcome',
>>>>>>> dac873bb2dc70ebecdc9803d8127fa251e5f532c
        sublist: [
            {id: '1_1', text: 'Installation'},
            {id: '1_2', text: 'Quick start'},
            {id: '1_3', text: 'Folder content'},
        ],
    },
    {
<<<<<<< HEAD
        id: 1,
        text: 'Sending Money',
        isOpen: true,
=======
        id: 2,
        text: 'Sending Money',
>>>>>>> dac873bb2dc70ebecdc9803d8127fa251e5f532c
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
<<<<<<< HEAD
        id: 2,
        text: 'Account Management',
        isOpen: false,
=======
        id: 3,
        text: 'Account Management',
>>>>>>> dac873bb2dc70ebecdc9803d8127fa251e5f532c
        sublist: [
            {id: '3_1', text: 'Link'},
            {id: '3_2', text: 'Link'},
        ],
    },
    {
<<<<<<< HEAD
        id: 3,
        text: 'Card',
        isOpen: false,
=======
        id: 4,
        text: 'Card',
>>>>>>> dac873bb2dc70ebecdc9803d8127fa251e5f532c
        sublist: [
            {id: '4_1', text: 'Link'},
            {id: '4_2', text: 'Link'},
        ],
    },
    {
<<<<<<< HEAD
        id: 4,
        text: 'Credit Products',
        isOpen: false,
=======
        id: 5,
        text: 'Credit Products',
>>>>>>> dac873bb2dc70ebecdc9803d8127fa251e5f532c
        sublist: [
            {id: '5_1', text: 'Link'},
            {id: '5_2', text: 'Link'},
        ],
    },
    {
<<<<<<< HEAD
        id: 5,
        text: 'Insurance',
        isOpen: false,
=======
        id: 6,
        text: 'Insurance',
>>>>>>> dac873bb2dc70ebecdc9803d8127fa251e5f532c
        sublist: [
            {id: '6_1', text: 'Link'},
            {id: '6_2', text: 'Link'},
        ],
    },
    {
<<<<<<< HEAD
        id: 6,
        text: 'Wealth and Trading',
        isOpen: false,
=======
        id: 7,
        text: 'Wealth and Trading',
>>>>>>> dac873bb2dc70ebecdc9803d8127fa251e5f532c
        sublist: [
            {id: '7_1', text: 'Link'},
            {id: '7_2', text: 'Link'},
        ],
    },
];

const FirstLevelList = () => {
<<<<<<< HEAD
    const [sidebarListItems, setSidebarListItems] = useState(ListItems);
    // const [isListOpened, setIsListOpened] = useState(false);

    const toggleList = (indx) => {
        const toggledListId = sidebarListItems.findIndex(
            (listItem) => listItem.id === indx,
        );

        const updatedToggledList = [...sidebarListItems];
        updatedToggledList[toggledListId].isOpen =
            !updatedToggledList[toggledListId].isOpen;

        setSidebarListItems(updatedToggledList);
        // console.log(sidebarListItems);
    };

    return (
        <React.Fragment>
            {/* 1st Level List */}
            {sidebarListItems.map((listitem, index) => (
                <li key={listitem.id}>
                    <a
                        href='#0'
                        onClick={() => toggleList(index)}
=======
    return (
        <React.Fragment>
            {/* 1st Level List */}
            {ListItems.map((listitem) => (
                <li key={listitem.key}>
                    <a
                        href='#0'
>>>>>>> dac873bb2dc70ebecdc9803d8127fa251e5f532c
                        className='flex items-center text-slate-800 text-sm font-bold'
                        aria-haspopup='true'
                        aria-expanded='true'
                    >
                        <svg
<<<<<<< HEAD
                            className={`mr-2 fill-slate-400 ${
                                listitem.isOpen && 'rotate-90'
                            }`}
=======
                            className='rotate-90 mr-2 fill-slate-400'
>>>>>>> dac873bb2dc70ebecdc9803d8127fa251e5f532c
                            width='8'
                            height='8'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path d='M2.854.647A.5.5 0 0 0 2 1v6a.5.5 0 0 0 .854.354l3-3a.5.5 0 0 0 .058-.638l-.058-.07-3-3Z'></path>
                        </svg>
                        <span>{listitem.text}</span>
                    </a>
                    {/* Second Level List */}
<<<<<<< HEAD
                    <ul
                        className={`mt-2 pl-6 text-sm/6 space-y-2 hidden ${
                            listitem.isOpen && '!block'
                        }`}
                    >
                        <SecondLevelList
                            key={listitem.sublist.id}
=======
                    <ul className='mt-2 pl-6 text-sm/6 space-y-2'>
                        <SecondLevelList
>>>>>>> dac873bb2dc70ebecdc9803d8127fa251e5f532c
                            secondListListItems={listitem.sublist}
                        />
                    </ul>
                </li>
            ))}
        </React.Fragment>
    );
};

export default FirstLevelList;
