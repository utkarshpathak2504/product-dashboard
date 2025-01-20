import React from 'react';

const SelectDropdown = ({ className, value, onChange, options }) => {
    return (
        <select className={className} value={value} onChange={onChange}>
            {options.map((option, index) => (
                <option key={index} value={option.value || option}>
                    {option.label || option}
                </option>
            ))}
        </select>
    );
};

export default SelectDropdown;