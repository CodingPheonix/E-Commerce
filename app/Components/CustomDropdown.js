"use client";
import { useState } from "react";

export const CustomSelect = ({ options, label, setCurrent_category, current_category }) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(options[0]);

    return (
        <div className="w-full">
            <label onClickCapture={() => {setCurrent_category({label: label, options: ''})}} className="block font-semibold hover:cursor-pointer">{label}</label>

            {/* Select Box */}
            <div
                onClick={() => setOpen(!open)}
                className="cursor-pointer px-4 py-2 rounded-lg bg-white flex justify-between items-center"
            >
                {selected}
                <span
                    className={`transition-transform duration-500 ${open ? "rotate-180" : "rotate-0"}`}
                >
                    ▼
                </span>
            </div>

            {/* Smooth Dropdown */}
            <div className={`w-full overflow-hidden transition-all duration-300 ease-in-out pl-5 ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                <ul className="bg-white rounded-lg mt-1">
                    {options.map((option) => (
                        <li
                            key={option}
                            onClick={() => {
                                setSelected(option);
                                setCurrent_category({options: option, label: label});
                                setOpen(false);
                            }}
                            className="px-4 py-2 hover:bg-gray-200 cursor-pointer transition-colors"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
