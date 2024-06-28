import React, { useState } from 'react';
import sadhanaForm from '../assets/sadhanaForm.png';

const options = {
    "Chanting on beads": ['0', '1-4 Rounds', '5-8 Rounds', '9-12 Rounds', '13-16 Rounds', '17-25 Rounds', '26 Rounds Above'],
    "Hearing Time": ['0', '1-16 min', '15-19 min', '20-39 min', '30-40 min', '41-60 min', '61 min above'],
    "Reading Time": ['0', '1-16 min', '15-19 min', '20-39 min', '30-40 min', '41-60 min', '61 min above'],
    "Sleeping time previous day": ['After 11:30 pm', '11:14 - 11:30 pm', '10:46 - 11:15 pm', '10:15 - 10:45 pm', '10:00 - 10:15 pm', 'Before 9:45 pm'],
    "Japa completion Time": ['Less than 70 min', '70-89 min', '90-100 min', '100-110 min', '110-120 min'],
    "Wake up time today": ['After 6 am', '5:15 - 6:00 am', '5:15 - 5:00 am', '4:45 - 5:15 am', '4:30 - 4:45 am', '4:15 - 4:45 am', 'Before 4:15 am'],
    "Reporting Sadhna daily": ['4 days after', '3 days after', '2 days after', '1 day after', 'Yes on the same day'],
    "Attendace Morning class": ['Absent', 'Present'],
    "Attendance Evening class": ['Absent', 'Present'],
    "Any sewa Given by Sewa Authority": ['Less than 4 min', '5-9 min', '10-19 min', '20-29 min', '30-60 min'],
    "Book distributed today": ['No book', '1 book', '2-5 books', 'More than 6 books'],
    "Temple collection": ['No', 'Yes']
};

const pointsMapping = {
    "Chanting on beads": {
        '0': 0, '1-4 Rounds': 4, '5-8 Rounds': 6, '9-12 Rounds': 8, '13-16 Rounds': 10, '17-25 Rounds': 12, '26 Rounds Above': 15
    },
    "Hearing Time": {
        '0': 0, '1-16 min': 4, '15-19 min': 6, '20-39 min': 8, '30-40 min': 10, '41-60 min': 12, '61 min above': 15
    },
    "Reading Time": {
        '0': 0, '1-16 min': 4, '15-19 min': 6, '20-39 min': 8, '30-40 min': 10, '41-60 min': 12, '61 min above': 15
    },
    "Sleeping time previous day": {
        'After 11:30 pm': 0, '11:14 - 11:30 pm': 4, '10:46 - 11:15 pm': 6, '10:15 - 10:45 pm': 8, '10:00 - 10:15 pm': 10, 'Before 9:45 pm': 15
    },
    "Japa completion Time": {
        'Less than 70 min': 0, '70-89 min': 4, '90-100 min': 6, '100-110 min': 8, '110-120 min': 10
    },
    "Wake up time today": {
        'After 6 am': 0, '5:15 - 6:00 am': 4, '5:15 - 5:00 am': 6, '4:45 - 5:15 am': 8, '4:30 - 4:45 am': 10, '4:15 - 4:45 am': 12, 'Before 4:15 am': 15
    },
    "Reporting Sadhna daily": {
        '4 days after': 0, '3 days after': 4, '2 days after': 6, '1 day after': 8, 'Yes on the same day': 10
    },
    "Attendace Morning class": {
        'Absent': 0, 'Present': 10
    },
    "Attendance Evening class": {
        'Absent': 0, 'Present': 10
    },
    "Any sewa Given by Sewa Authority": {
        'Less than 4 min': 0, '5-9 min': 4, '10-19 min': 6, '20-29 min': 8, '30-60 min': 10
    },
    "Book distributed today": {
        'No book': 0, '1 book': 10, '2-5 books': 12, 'More than 6 books': 15
    },
    "Temple collection": {
        'No': 0, 'Yes': 10
    }
};

export default function SadhanaForm() {
    const [selectedOptions, setSelectedOptions] = useState({});

    const handleSelection = (category, option) => {
        setSelectedOptions((prevSelectedOptions) => ({
            ...prevSelectedOptions,
            [category]: option
        }));
    };

    const handleSubmit = () => {
        let totalPoints = 0;
        console.log("selectedOptions", selectedOptions);

        Object.keys(selectedOptions).forEach((category) => {
            const option = selectedOptions[category];
            totalPoints += pointsMapping[category][option] || 0;
        });

        console.log("Total Points: ", totalPoints);
    };

    return (
        <div>
            <div className="hidden md:grid grid-cols-2 mr-4 mt-4">
                <div>
                    <img src={sadhanaForm} width="600px" alt="Home" />
                </div>
                <div>
                    <p className="text-gray-600 font-normal text-6xl leading-14 tracking-tight mt-[130px] ml-10">
                        Deeper your Sadhana,<br /> lesser you are affected<br /> by the world
                    </p>
                </div>
            </div>

            <div className='w-full md:mx-20 mx-10'>
                {Object.keys(options).map((category) => (
                    <div key={category} className="mb-6">
                        <h3 className="text-lg font-semibold mb-2 w-full mx-auto">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {options[category].map((option) => (
                                <button
                                    key={option}
                                    onClick={() => handleSelection(category, option)}
                                    className={`px-2 py-1 border rounded ${selectedOptions[category] === option ? 'bg-[#008080]' : 'bg-[#FFEDCC]'}`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
                <div className='w-full ml-30'>
                    <button
                        onClick={handleSubmit}
                        className="rounded-lg md:px-5 md:py-3 px-1 py-1 bg-[#008080] text-white font-bold mt-5 text-xl"
                    >
                        Submit
                    </button>
                </div>
            </div>

            <div className='md:hidden h-[150px]'></div>
        </div>
    );
}
