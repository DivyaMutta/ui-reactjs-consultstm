import React, { useState } from 'react';
import './Dropdown.css';

export default function Dropdown({
    name,
    options,
    onChange,
    errors
}) {
    const [value, setValue] = useState();
    const handleChange = (event) => {
        setValue(event.target.value);
        onChange(event.target.value);
    };
    
    return (
        <div className="Dropdown-wrapper">
            <fieldset>
                <label>
                    <select className="Dropdown" name={name} value={value} onChange={handleChange}>
                        <option value="">Please Select</option>
                        { options.map((option, index) => (
                            <option key={index} value={option.code}>{option.name}</option>
                        )) }
                    </select>
                </label>
                { errors && errors[name] && errors[name].length > 0 ? <span className="error">{errors[name]}</span> : null }
            </fieldset>
        </div>
    );
}
